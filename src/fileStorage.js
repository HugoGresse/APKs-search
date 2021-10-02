import fs from 'fs-extra'
import { Status } from './Status'

const __dirname = process.cwd()
const STORAGE_FILEPATH = `${__dirname}/cache/storage.json`


export class FileStorage {
    data = null

    ensureFile = async () => {
        const fileExists = await fs.exists(STORAGE_FILEPATH)

        if (!fileExists) {
            await fs.writeJson(STORAGE_FILEPATH, {})
        }
    }
    getStoredData = async () => {
        await this.ensureFile()
        this.data = await fs.readJson(STORAGE_FILEPATH)
        return this.data
    }

    updateStoredData = async (data) => {
        await this.ensureFile()
        await fs.writeJson(STORAGE_FILEPATH, data)
    }
    getAppsToDownload = async () => {
        await this.getStoredData()

        return Object.keys(this.data).reduce((acc, appId) => {
            if (this.data[appId].status < Status.downloaded) {
                acc.push(appId)
            }

            return acc
        }, [])
    }
    updateAppStatus = (appId, status) => {
        this.data[appId] = status
    }


}

export let fileStorage = new FileStorage()
