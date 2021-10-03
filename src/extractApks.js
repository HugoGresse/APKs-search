import { decompile } from './utils/ApkTool'
import { DECOMPILED_FOLDER_PATH, fileStorage, STORAGE_DOWNLOAD_FOLDER } from './fileStorage'
import { Status } from './Status'
import fs from 'fs-extra'

export const extractApks = async (appIds = [] ) => {
    console.log(`> Extracting ${appIds.length} apps`)

    for(const appId of appIds) {
        await extractApk(appId)
    }

}

const extractApk = async (appId) => {
    console.log("Decompile ", appId)
    await fileStorage.updateAppStatus(appId, Status.unpacking)

    const outputFolder = `${DECOMPILED_FOLDER_PATH}/${appId}`
    const outputFolderExists = await fs.exists(outputFolder)
    if(outputFolderExists) {
        await fs.remove(outputFolder)
    }

    await decompile(`${STORAGE_DOWNLOAD_FOLDER}/${appId}.apk`, `${DECOMPILED_FOLDER_PATH}/${appId}`)
    await fileStorage.updateAppStatus(appId, Status.unpacked)
    await fileStorage.persist()
}
