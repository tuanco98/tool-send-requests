import { MongoClient, Collection } from 'mongodb'
import { successConsoleLog } from './color-log'
import { Campaign } from './models/Campaign'

let mongo: MongoClient
export let campaigns: Collection<Campaign>

const collections = {
    campaigns: 'campaigns',
}

const connectMongoUser = async (MONGO_URI: string) => {
    try {
        console.log('MONGO_URI', MONGO_URI)
        
        mongo = new MongoClient(MONGO_URI)

        await mongo.connect()

        mongo.on('error', async (e) => {
            try {
                await mongo.close()
                await connectMongoUser(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongoUser, 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongoUser(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongoUser, 1000)
                throw e
            }
        })

        mongo.on('close', async () => {
            try {
                await connectMongoUser(MONGO_URI)
            } catch (e) {
                throw e
            }
        })
        const db = mongo.db()
        campaigns = db.collection(collections.campaigns)
        
        successConsoleLog(`🚀 mongodb: connected`)
    } catch (e) {
        console.error(`mongodb: disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongoUser, 1000)
        throw e
    }
}

export { mongo, connectMongoUser, collections }


