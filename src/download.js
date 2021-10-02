import { fileStorage } from './fileStorage'
import { Status } from './Status'

export const downloadAll = async  (appIds = []) => {

}

const download = async (appId) => {
    await fileStorage.updateAppStatus(appId, Status.downloading)

    // TODO here

    await fileStorage.updateAppStatus(appId, Status.downloaded)
}
