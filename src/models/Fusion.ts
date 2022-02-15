import { IndexDescription } from "mongodb";
import { FusionStatus, TransactionError } from "./Common";

export interface Forging {
    txid: string;
    blockNumber: number;
    result?: boolean;
    timestamp: number;
}
export interface Fusion {
    owner: string
    runeId: number
    option: string[]
    key: string
    createdAt: number
    blockNumber: number
    bot_index: number
    isForging: boolean
    txid: string
    forging_info?: Forging
    status?: FusionStatus
    result?: boolean
    blockHash?: string
    error?: TransactionError
}
export const FusionIndexes: IndexDescription[] = [
    { key: { key: 1 }, unique: true },
    { key: { runeId: 1 } },
    { key: { createdAt: 1 } },
    { key: { bot_index: 1 } },
    { key: { isForging: 1 } },
    { key: { blockNumber: 1 } },
    { key: { result: 1 } },
    { key: { error: 1 } },
    { key: { status: 1 } },
    { key: { txid: 1 }, unique: true },
    { key: { isForging: 1, bot_index: 1, result: 1, error: 1 }, background: true }
]