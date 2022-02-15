import { Fusions } from "../../../mongodb"

export const statistic_user_fusion_with_date_get = async (root: any, args: any) => {
    try {
        const { start_timestamp, end_timestamp } = args as { start_timestamp: number; end_timestamp: number }

        const get_fusion = await Fusions.find({createdAt: {$gte: start_timestamp, $lt: end_timestamp}}).toArray()

        console.log(get_fusion.length)
    } catch (e) {
        throw e
    }
}
