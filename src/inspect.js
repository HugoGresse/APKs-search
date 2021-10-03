import fs from 'fs-extra'
import path from 'path'
import { DECOMPILED_FOLDER_PATH } from './fileStorage'

const FILE_TYPES = ['.js', ".bundle", ".xml", ".json", ".html", ".htm", ".txt", ".smali"]
const SEARCH_TERM = "plantnet"

export const inspectAppIds = async (appIds = []) => {
    console.log(`> Inspecting ${appIds.length} apps`)

    for(const appId of appIds) {
        await inspectAppId(appId)
    }

}

const inspectAppId = async (appId) => {
    console.log("Inspect ", appId)
    const folder = `${DECOMPILED_FOLDER_PATH}/${appId}`

    await searchFilesInDirectoryAsync(folder, SEARCH_TERM, FILE_TYPES)

}

async function searchFilesInDirectoryAsync(dir, filter, exts = []) {
    const found = await getFilesInDirectoryAsync(dir, exts)

    for (const file of found) {
        const fileContent = await fs.readFile(file)

        if (fileContent.includes(SEARCH_TERM)) {
            console.log(`Your word was found in file: ${file}`)
        }
    }

}

// Using recursion, we find every file with the desired extention, even if its deeply nested in subfolders.
async function getFilesInDirectoryAsync(dir, exts = []) {
    let files = []
    const filesFromDirectory = await fs.readdir(dir).catch(err => {
        throw new Error(err.message)
    })

    for (const file of filesFromDirectory) {
        const filePath = path.join(dir, file)
        const stat = await fs.lstat(filePath)

        // If we hit a directory, apply our function to that dir. If we hit a file, add it to the array of files.
        if (stat.isDirectory()) {
            const nestedFiles = await getFilesInDirectoryAsync(filePath, exts)
            files = files.concat(nestedFiles)
        } else if (exts.includes(path.extname(file))) {
            files.push(filePath)
        }
    }


    return files
}
