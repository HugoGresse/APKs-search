import { search } from './search'
import { fileStorage } from './fileStorage'

const main = async () => {
    const data = await fileStorage.getStoredData()

    const apps = await search()

    Object.keys(apps).forEach(appId => {
        if(!data[appId]){
            data[appId] = apps[appId]
        }
    })

    await fileStorage.updateStoredData(data)

    const appsToDownload = await fileStorage.getAppsToDownload()

    // TODO here

}


main()
