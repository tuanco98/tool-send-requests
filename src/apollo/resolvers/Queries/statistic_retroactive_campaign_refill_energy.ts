import { campaigns } from "../../../mongodb-user"
export const statistic_retroactive_campaign_refill_energy = async (root: any, args: any) => {
    try {
        const { campaign_name, start_timestamp, end_timestamp } = args as { campaign_name: string; start_timestamp: number; end_timestamp: number }
        if (!campaign_name) throw new Error(`Campaign Name not null`)
        const findOptions =
            start_timestamp && end_timestamp ? { claim_at: { $gte: start_timestamp, $lt: end_timestamp } } : { campaign_name, claim_at: { $exists: true } }
        const get_campaigns = await campaigns
            .aggregate([
                {
                    $match: findOptions,
                },
                {
                    $group: {
                        _id: "totalREclaimed",
                        total: { $sum: "$quantity_reward" },
                    },
                },
            ])
            .toArray()
        const totalWalletclaimed = await campaigns.countDocuments(findOptions)
        return {
            totalWalletclaimed,
            totalREclaimed: get_campaigns[0].total,
        }
    } catch (e) {
        throw e
    }
}
