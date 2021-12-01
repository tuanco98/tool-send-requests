import { config } from "dotenv"

config()

if (!process.env.PORT) throw new Error('PORT must be provided')
export const config_PORT = process.env.PORT

if (!process.env.BUILD_URL) throw new Error('BUILD_URL must be provided')
export const config_BUILD_URL = process.env.BUILD_URL