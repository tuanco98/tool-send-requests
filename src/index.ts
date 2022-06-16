import { initGraphQLServer } from "./apollo"
import { config_MONGO_BOX_URI,config_MONGO_USER_URI, config_MONGO_URI } from "./config"
import { connectMongo } from "./mongodb-fusion"
import { connectMongoUser } from "./mongodb-user"
import { connectMongoBox } from "./mongodb_box"
import { connectWeb3 } from "./web3"

(async () => {
    try {
        await Promise.all([
            connectWeb3(),
            connectMongoUser(config_MONGO_USER_URI)
            // connectMongo(config_MONGO_URI),
            // connectMongoBox(config_MONGO_BOX_URI)
        ])
        initGraphQLServer()
    } catch (e) {
        throw e
    }
})()