import { config } from "dotenv"

config()

if (!process.env.PORT) throw new Error('PORT must be provided')
export const config_PORT = process.env.PORT

if (!process.env.BUILD_URL) throw new Error('BUILD_URL must be provided')
export const config_BUILD_URL = process.env.BUILD_URL
if (!process.env.CONTRACT_FUSION_ADDRESS) throw new Error('CONTRACT_FUSION_ADDRESS must be provided')
export const config_CONTRACT_FUSION_ADDRESS = process.env.CONTRACT_FUSION_ADDRESS
if (!process.env.CONTRACT_BOX_ADDRESS) throw new Error('CONTRACT_BOX_ADDRESS must be provided')
export const config_CONTRACT_BOX_ADDRESS = process.env.CONTRACT_BOX_ADDRESS