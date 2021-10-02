import gplay from "google-play-scraper"
import { Status } from './Status'
import { PLANTNET_ID, SEARCH_COUNTRY, SEARCH_RESULTS, SEARCH_SIMILAR_ENABLE, SEARCH_TERMS } from './Constants'

export const search = async () => {
    const appsById = {}

    try {
        const termsApps = await searchByTerm()
        termsApps.forEach(app => {
            appsById[app.appId] = {
                ...app,
                status: Status.new
            }
        })

        if(SEARCH_SIMILAR_ENABLE) {
            const similarApps = await searchBySimilar()
            similarApps.forEach(app => {
                appsById[app.appId] = {
                    ...app,
                    status: Status.new
                }
            })
        }
    } catch (error) {
        console.error("Error in search", error)
    }

    return appsById
}

const searchByTerm = async () => {
    const apps = []

    for (const term of SEARCH_TERMS) {
        const results = await gplay.search({
            term: term,
            num: SEARCH_RESULTS,
            country: SEARCH_COUNTRY,
            price: "free"
        })

        results.forEach(result => (
            apps.push({
                appId: result.appId,
                url: result.url,
                title: result.title,
            })
        ))
    }
    return apps
}

const searchBySimilar = async () => {
    const apps = []

    const results = await gplay.similar({
        appId: PLANTNET_ID,
        num: SEARCH_RESULTS,
        country: SEARCH_COUNTRY,
        price: "free"
    })

    results.forEach(result => (
        apps.push({
            appId: result.appId,
            url: result.url,
            title: result.title,
        })
    ))
    return apps
}
