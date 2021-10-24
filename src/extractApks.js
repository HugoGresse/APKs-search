import { decompile } from './utils/ApkTool'
import { DECOMPILED_FOLDER_PATH, fileStorage, STORAGE_DOWNLOAD_FOLDER } from './fileStorage'
import { Status } from './Status'
import fs, { exists } from 'fs-extra'

export const extractApks = async (appIds = []) => {
    console.log(`> Extracting ${appIds.length} apps`)

    for (const appId of appIds) {
        await extractApk(appId)
    }

}

const extractApk = async (appId) => {
    console.log("Decompile ", appId)
    await fileStorage.updateAppStatus(appId, Status.unpacking)

    const apkPath = `${STORAGE_DOWNLOAD_FOLDER}/${appId}.apk`
    const outputFolder = `${DECOMPILED_FOLDER_PATH}/${appId}`

    const apkExists = await exists(apkPath)
    if (!apkExists) {
        console.log(`-- Fail decompile ${appId}, missing apk`)
        await fileStorage.updateAppStatus(appId, Status.error)
        return
    }

    const outputFolderExists = await fs.exists(outputFolder)
    if (outputFolderExists) {
        await fs.remove(outputFolder)
    }

    try {
        await decompile(apkPath, outputFolder)
    } catch (error) {
        console.log(`-- Fail decompile ${appId}, error:`, error.toString())
        await fileStorage.updateAppStatus(appId, Status.error)
        return
    }
    await fileStorage.updateAppStatus(appId, Status.unpacked)
    await fileStorage.persist()
}
