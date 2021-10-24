import fs from 'fs-extra'
import { Status } from './Status'

const __dirname = process.cwd()

export const STORAGE_TOKEN_PATH = `${__dirname}/cache/oauthToken.txt`
export const STORAGE_DOWNLOAD_FOLDER = `${__dirname}/cache/downloadedApks`
export const DECOMPILED_FOLDER_PATH = `${__dirname}/cache/decompiledApks`


const STORAGE_FILEPATH = `${__dirname}/cache/storage.json`

export class FileStorage {
    data = null

    init = async () => {
        await this.ensureFile()
        return this.data
    }
    ensureFile = async () => {
        if (!this.data) {
            const fileExists = await fs.exists(STORAGE_FILEPATH)

            if (!fileExists) {
                await fs.writeJson(STORAGE_FILEPATH, {})
            }
            this.data = await fs.readJson(STORAGE_FILEPATH)
        }
    }
    persist = async () => {
        await this.ensureFile()
        await fs.writeJson(STORAGE_FILEPATH, this.data)
    }
    addApps = async (apps = {}) => {
        await this.ensureFile()

        Object.keys(apps).forEach(appId => {
            if (!this.data[appId]) {
                this.data[appId] = apps[appId]
            }
        })
        await this.persist()
    }
    getAppsToDownload = async () => {
        await this.ensureFile()

        return Object.keys(this.data).reduce((acc, appId) => {
            if (this.data[appId].status < Status.downloaded) {
                acc.push(appId)
            }

            return acc
        }, [])
    }
    getAppsToExtract = async () => {
        await this.ensureFile()
        return Object.keys(this.data).reduce((acc, appId) => {
            if (this.data[appId].status === Status.downloaded) {
                acc.push(appId)
            }

            return acc
        }, [])
    }
    getAppsToInspect = async (appIds, skipOld) => {
        return Object.keys(this.data).reduce((acc, appId) => {
            if (appIds.includes(appId)) {
                const matches = skipOld ? this.data[appId].status === Status.unpacked : this.data[appId].status >= Status.unpacked
                if (matches) {
                    acc.push(appId)
                }
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
