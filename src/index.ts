import { initGraphQLServer } from "./apollo"
import { connectWeb3 } from "./web3"

(async () => {
    try {
        await Promise.all([
            initGraphQLServer(),
            connectWeb3('http://51.79.229.100:8575/')
        ]) 
    } catch (e) {
        throw e
    }
})()