import { ObjectId } from "mongodb"
export enum RewardType {
    REFILL_ENERGY = "REFILL_ENERGY"
}
export enum CampaignName {
    RETROACTIVE = "RETROACTIVE"
} 
export interface Campaign {
    _id?: ObjectId
    address: string
    campaign_name: string
    quantity_reward: number
    reward_type: RewardType
    start_timestamp_claim: number
    expires_at: number
    created_at: number
    claim_at?: number
}