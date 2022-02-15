import { IndexDescription, ObjectId } from "mongodb"

export enum BoxType {
    gold = `gold`,
    platinum = `platinum`,
    diamond = `diamond`,
}
export enum BoxStatus {
    processing = `processing`,
    rewarding = `rewarding`,
    opened = `opened`,
}
export interface UnboxDetail {
    totalRune: number
    runeAmount: number[]
}
export interface Box {
    _id?: ObjectId
    tokenId: number
    quantity?: number
    currency?: string
    ownerAddress: string
    buyBox_txid: string
    buyBox_blockNumber: number
    unbox_txid?: string
    unbox_blockNumber?: number
    nftType: string
    typeBox?: number
    isBidding: boolean
    createdAt: number
    lastUpdatedAt: number
    unbox: boolean
    unboxAt?: number
    status?: BoxStatus
}
