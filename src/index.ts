import { initGraphQLServer } from "./apollo"

(async () => {
    try {
        initGraphQLServer()
    } catch (e) {
        throw e
    }
})()