import { campaigns } from "../../../mongodb-user"
export const statistic_retroactive_campaign_refill_energy = async (root: any, args: any) => {
    try {
        const { campaign_name } = args as { campaign_name: string; start_timestamp: number; end_timestamp: number }
        if (!campaign_name) throw new Error(`Campaign Name not null`)
        const get_campaigns = await campaigns
            .aggregate([
                {
                    $match: { campaign_name, claim_at: { $exists: true } },
                    
                },
                {
                    $group: {
                        _id: "totalREclaimed",
                        total: { $sum: "$quantity_reward" },
                    },
                }
            ])
            .toArray()
        const totalWalletclaimed = await campaigns.countDocuments({ campaign_name, claim_at: { $exists: true } })
        return {
            totalWalletclaimed,
            totalREclaimed: get_campaigns[0].total,
        }
    } catch (e) {
        throw e
    }
}
