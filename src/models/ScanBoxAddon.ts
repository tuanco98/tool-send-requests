import { IndexDescription } from "mongodb"

export interface ScanBoxAddon {
    ownerAddress: string
    date: number
    createdAt: number
    time_key: number
    box_testnet_addons: number[]
}
