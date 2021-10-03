import fs from 'fs-extra'
import { Status } from './Status'

const __dirname = process.cwd()

export const STORAGE_TOKEN_PATH = `${__dirname}/cache/oauthToken.txt`
export const STORAGE_DOWNLOAD_FOLDER = `${__dirname}/cache/downloadedApks`
export const DECOMPILED_FOLDER_PATH =   `${__dirname}/cache/decompiledApks`



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
        delete data['org.plantnet']
        await fs.writeJson(STORAGE_FILEPATH, data)
    }
    persist = async () => {
        await this.ensureFile()
        delete this.data['org.plantnet']
        await fs.writeJson(STORAGE_FILEPATH, this.data)
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
    getAppsToExtract = async () => {
        await this.getStoredData()

        return Object.keys(this.data).reduce((acc, appId) => {
            if (this.data[appId].status === Status.downloaded) {
                acc.push(appId)
            }

            return acc
        }, [])
    }
    getAppsToInspect = async () => {
        await this.getStoredData()

        return Object.keys(this.data).reduce((acc, appId) => {
            if (this.data[appId].status === Status.unpacked) {
                acc.push(appId)
            }

            return acc
        }, [])
    }
    updateAppStatus = (appId, status) => {
        this.data[appId] = {
            ...this.data[appId],
            status,
            dateUpdated: new Date().toGMTString()
        }
    }


}

export let fileStorage = new FileStorage()
