import fs from 'fs-extra'
import path from 'path'
import { DECOMPILED_FOLDER_PATH, fileStorage } from './fileStorage'
import { Status } from './Status'

const FILE_TYPES = ['.js', ".bundle", ".xml", ".json", ".html", ".htm", ".txt", ".smali"]

export const inspectAppIds = async (appIds = [], searchTerm) => {
    console.log(`> Inspecting ${appIds.length} apps`)

    const results = {}

    for(const appId of appIds) {
        const matchingFiles = await inspectAppId(appId, searchTerm)

        if(matchingFiles.length > 0) {
            fileStorage.updateAppStatus(appId, Status.matched)
            results[appId] = matchingFiles
        } else {
            fileStorage.updateAppStatus(appId, Status.analysed)
        }
    }

    return results
}

const inspectAppId = async (appId, searchTerm) => {
    console.log("Inspect ", appId)
    const folder = `${DECOMPILED_FOLDER_PATH}/${appId}`

    return await searchFilesInDirectoryAsync(folder, searchTerm, FILE_TYPES)
}

async function searchFilesInDirectoryAsync(dir, searchTerm, exts = []) {
    const files = await getFilesInDirectoryAsync(dir, exts)

    const foundFiles = []

    for (const file of files) {
        const fileContent = await fs.readFile(file)

        if (fileContent.includes(searchTerm)) {
            foundFiles.push(file)
            console.log(` - Your term was found in file: ${file}`)
        }
    }

    return foundFiles
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
