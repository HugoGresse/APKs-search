import { Command } from 'commander/esm.mjs'
import { search } from './search'
import {  fileStorage } from './fileStorage'
import { downloadAll } from './download'
import { extractApks } from './extractApks'
import { inspectAppIds } from './inspect'
import { exists } from 'fs-extra'

const program = new Command()

program
    .requiredOption("-s, --search [name...]", "App search term for the store to finds apps")
    .option("-c, --count <number>", "Search results count for each search",  parseFloat, 1)
    .option("-si, --similar", "Similarity app search to find related apps to the one given on this params (ex: org.plantnet).")
    .option("-e, --exclude <packageId>", "Exclude given app id in the app search")
    .option("-co, --country <country>", "Country to find the app in",  "us")
    .option('--skip-old', "Skip already inspected file in cache (cache includes all download apps no matter the initial search term)", false)
    .requiredOption('-t, --term <term>', "Search term (one) to be find in decompiled app")

program.parse()
program.showSuggestionAfterError()

const main = async () => {
    const options = program.opts()

    const envFileExists = await exists("./.env")

    if(!envFileExists) {
        console.error('⚠️ Missing .env file in repo root, create it according to the readme')
        return
    }
    console.log(options)

    await fileStorage.init()

    const apps = await search(options.search, options.similar, options.count, options.country, options.exclude)

    await fileStorage.addApps(apps)

    const appIdsToDownload = await fileStorage.getAppsToDownload()
    await downloadAll(appIdsToDownload, Object.keys(apps).length - appIdsToDownload.length)

    const appIdsToExtract = await fileStorage.getAppsToExtract()
    await extractApks(appIdsToExtract)

    const appIdsToInspect = await fileStorage.getAppsToInspect(Object.keys(apps), options.skipOld)
    const results = await inspectAppIds(appIdsToInspect, options.term)

    console.log(`\n\n`)
    if(Object.keys(results).length > 0) {
        console.log(`${Object.keys(results).length} app contain the term ${options.term}, here is the details: \n`)
        console.log(JSON.stringify(results, null, 4))
    } else {
        console.log("No match")
    }
}

// noinspection JSIgnoredPromiseFromCall
main()
