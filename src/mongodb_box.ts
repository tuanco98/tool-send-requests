import { MongoClient, Collection } from 'mongodb'
import { successConsoleLog } from './color-log'
import { Box } from './models/Box'
import { Fusion } from './models/Fusion'
import { ScanBoxAddon } from './models/ScanBoxAddon'
import { ScanBoxUser } from './models/ScanBoxUser'

let mongo: MongoClient
export let Fusions: Collection<Fusion>
export let Boxes: Collection<Box>
export let Scan_Box_Users: Collection<ScanBoxUser>
export let Scan_Box_Addons: Collection<ScanBoxAddon>

const collections = {
    boxes: 'boxes',
    scan_box_users: 'scan_box_users',
    scan_box_addons: 'scan_box_addons',
}

const connectMongoBox = async (MONGO_URI: string) => {
    try {
        console.log('MONGO_BOX_URI', MONGO_URI)
        
        mongo = new MongoClient(MONGO_URI)

        await mongo.connect()

        mongo.on('error', async (e) => {
            try {
                await mongo.close()
                await connectMongoBox(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongoBox, 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongoBox(MONGO_URI)
            } catch (e) {
                setTimeout(connectMongoBox, 1000)
                throw e
            }
        })

        mongo.on('close', async () => {
            try {
                await connectMongoBox(MONGO_URI)
            } catch (e) {
                throw e
            }
        })
        const db = mongo.db()
        Boxes = db.collection(collections.boxes)
        Scan_Box_Users = db.collection(collections.scan_box_users)
        Scan_Box_Addons = db.collection(collections.scan_box_addons)
        
        successConsoleLog(`🚀 mongodb box: connected`)
    } catch (e) {
        console.error(`mongodb box: disconnected`)
        await mongo?.close(true)
        setTimeout(connectMongoBox, 1000)
        throw e
    }
}

export { mongo, connectMongoBox, collections }


