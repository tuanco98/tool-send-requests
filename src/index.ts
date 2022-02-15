import { initGraphQLServer } from "./apollo"
import { config_MONGO_URI } from "./config"
import { connectMongo } from "./mongodb"
import { connectWeb3 } from "./web3"

(async () => {
    try {
        await Promise.all([
            initGraphQLServer(),
            connectWeb3('http://51.79.229.100:8575/'),
            connectMongo(config_MONGO_URI)
        ])
    } catch (e) {
        throw e
    }
})()