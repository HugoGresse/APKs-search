import gplay from "google-play-scraper"
import { Status } from './Status'

export const search = async (searchTerms, similarAppId, resultsCount, country, excludeId) => {
    console.log(`> Searching apps`)
    const appsById = {}

    try {
        const termsApps = await searchByTerm(searchTerms, resultsCount, country)
        termsApps.forEach(app => {
            appsById[app.appId] = {
                ...app,
                status: Status.new
            }
        })

        if (similarAppId) {
            console.log("search similar")
            const similarApps = await searchBySimilar(resultsCount, country, similarAppId)
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

    if(excludeId) {
        delete appsById[excludeId]
    }

    console.log(`Found ${Object.keys(appsById).length} apps`)

    return appsById
}

const searchByTerm = async (searchTerms, resultsCount, country) => {
    const apps = []

    for (const term of searchTerms) {
        const results = await gplay.search({
            term: term,
            num: resultsCount,
            country: country,
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

const searchBySimilar = async (resultsCount, country, similarAppId) => {
    const apps = []

    const results = await gplay.similar({
        appId: similarAppId,
        num: resultsCount,
        country: country,
        price: "free"
    })

    results.forEach(result => {
        if (result.priceText === "FREE") {
            apps.push({
                appId: result.appId,
                url: result.url,
                title: result.title,
            })
        }
    })
    return apps
}
