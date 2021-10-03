import { fileStorage, STORAGE_DOWNLOAD_FOLDER, STORAGE_TOKEN_PATH } from './fileStorage'
import { Status } from './Status'
import GooglePlayAPI from "@gonetone/google-play-api"
import { Env } from './Constants'

const gpAPI = new GooglePlayAPI(Env.email, Env.gsfId)

export const downloadAll = async (appIds = []) => {
    console.log(`> Downloading ${appIds.length} apps`)
    const token = await gpAPI.getGoogleToken(Env.oauthToken, STORAGE_TOKEN_PATH)

    await gpAPI.googleAuth(token)

    for(const appId of appIds) {
        await download(appId)
    }
}

const download = async (appId) => {
    await fileStorage.updateAppStatus(appId, Status.downloading)

    console.log("Downloading ", appId)
    await gpAPI.downloadApk(appId, STORAGE_DOWNLOAD_FOLDER)

    await fileStorage.updateAppStatus(appId, Status.downloaded)
    await fileStorage.persist()
}
