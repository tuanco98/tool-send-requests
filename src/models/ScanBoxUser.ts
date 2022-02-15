import { IndexDescription } from "mongodb"
export enum TypeUser {
    partner = `partner`,
    user = `user`,
}
export interface ScanBoxUser {
    ownerAddress: string
    scanedAt: number
    date: number
    typeUser: TypeUser
    isClaim: boolean
    isMint: boolean
    time_key: number
    user_key?: string
    claimedAt?: number
    mintedAt?: number
    box_testnet_claim: number[]
    mint_txid?: string[] | string
    box_testnet_claim_by_chunks?: number[][]
    blockNumber?: number
}
