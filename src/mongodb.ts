import { MongoClient, Collection } from 'mongodb'
import { successConsoleLog } from './color-log'
import { Fusion } from './models/Fusion'

let mongo: MongoClient
export let Fusions: Collection<Fusion>

const collections = {
    fusions: 'fusions',
}

const connectMongo = async (MONGO_URI: string) => {
    try {
        console.log('MONGO_URI', MONGO_URI)
        
        mongo = new MongoClient(MONGO_URI)

        await mongo.connect()

        mongo.on('error', async (e) => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongo(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongo, 1000)
                throw e
            }
        })

        mongo.on('close', async () => {
            try {
                await connectMongo(MONGO_URI)
            } catch (e) {
                throw e
            }
        })
        const db = mongo.db()
        Fusions = db.collection(collections.fusions)
        
        successConsoleLog(`🚀 mongodb: connected`)
    } catch (e) {
        console.error(`mongodb: disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongo, 1000)
        throw e
    }
}

export { mongo, connectMongo, collections }


