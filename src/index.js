import { search } from './search'
import {  fileStorage } from './fileStorage'
import { downloadAll } from './download'
import { extractApks } from './extractApks'
import { inspectAppIds } from './inspect'


const main = async () => {
    const data = await fileStorage.getStoredData()

    const apps = await search()

    Object.keys(apps).forEach(appId => {
        if(!data[appId]){
            data[appId] = apps[appId]
        }
    })

    await fileStorage.updateStoredData(data)
    //
    // const appIdsToDownload = await fileStorage.getAppsToDownload()
    // await downloadAll(appIdsToDownload)

    // const appIdsToExtract = await fileStorage.getAppsToExtract()
    // await extractApks(appIdsToExtract)
    //
    // const appIdsToInspect = await fileStorage.getAppsToInspect()
    // await inspectAppIds(appIdsToInspect)

}

// noinspection JSIgnoredPromiseFromCall
main()
