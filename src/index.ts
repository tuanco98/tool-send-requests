import { initGraphQLServer } from "./apollo"
import { config_MONGO_BOX_URI, config_MONGO_URI } from "./config"
import { connectMongo } from "./mongodb"
import { connectMongoBox } from "./mongodb_box"
import { connectWeb3 } from "./web3"

(async () => {
    try {
        await Promise.all([
            initGraphQLServer(),
            connectWeb3('http://51.79.229.100:8575/'),
            connectMongo(config_MONGO_URI),
            connectMongoBox(config_MONGO_BOX_URI)
        ])
    } catch (e) {
        throw e
    }
})()