import { search } from './search'
import { fileStorage } from './fileStorage'
import { downloadAll } from './download'


const main = async () => {
    const data = await fileStorage.getStoredData()

    const apps = await search()

    Object.keys(apps).forEach(appId => {
        if(!data[appId]){
            data[appId] = apps[appId]
        }
    })

    await fileStorage.updateStoredData(data)

    const appIdsToDownload = await fileStorage.getAppsToDownload()
    await downloadAll(appIdsToDownload)

    const appIdToExtract = await fileStorage.getAppsToExtract()
    console.log(appIdToExtract)
}


main()
