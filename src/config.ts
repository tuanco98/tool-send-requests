import { config } from "dotenv"

config()

if (!process.env.PORT) throw new Error('PORT must be provided')
export const config_PORT = process.env.PORT
if (!process.env.NODE_ENV) throw new Error('NODE_ENV must be provided')
export const config_NODE_ENV = process.env.NODE_ENV
if (!process.env.BUILD_URL) throw new Error('BUILD_URL must be provided')
export const config_BUILD_URL = process.env.BUILD_URL
if (!process.env.CONTRACT_FUSION_ADDRESS) throw new Error('CONTRACT_FUSION_ADDRESS must be provided')
export const config_CONTRACT_FUSION_ADDRESS = process.env.CONTRACT_FUSION_ADDRESS
if (!process.env.CONTRACT_BOX_ADDRESS) throw new Error('CONTRACT_BOX_ADDRESS must be provided')
export const config_CONTRACT_BOX_ADDRESS = process.env.CONTRACT_BOX_ADDRESS
if (!process.env.CONTRACT_MARKETPLACE_ADDRESS) throw new Error('CONTRACT_MARKETPLACE_ADDRESS must be provided')
export const config_CONTRACT_MARKETPLACE_ADDRESS = process.env.CONTRACT_MARKETPLACE_ADDRESS

if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be provided')
export const config_MONGO_URI = process.env.MONGO_URI
<<<<<<< HEAD

if (!process.env.MOD_KEY) throw new Error('MOD_KEY must be provided')
export const config_MOD_KEY = process.env.MOD_KEY
=======
if (!process.env.MONGO_BOX_URI) throw new Error('MONGO_BOX_URI must be provided')
export const config_MONGO_BOX_URI = process.env.MONGO_BOX_URI
>>>>>>> ef4b8dde9d178dd2ba9e9661e8845b3b8ebce455
