import { Boxes, Scan_Box_Addons, Scan_Box_Users } from "../../../mongodb_box"

type StatisticBox = {
    user_addon: number
    active_user: number
    claimable_box: number
    claimed_box: number
    unbox_times: number
}
export const statistic_box_with_date_get = async (root: any, args: any) => {
    try {
        const { start_timestamp, end_timestamp, mod_key } = args as {
            mod_key: string
            start_timestamp: number
            end_timestamp: number
        }
        const milisecond_per_day = 86400000
        const [total_unbox, total_box_claimed, get_user_claim, get_addon, user_fusion_all_rune] = await Promise.all([
            Boxes.countDocuments({ unboxAt: { $gte: start_timestamp, $lt: end_timestamp } }),
            Boxes.countDocuments({ createdAt: { $gte: start_timestamp, $lt: end_timestamp } }),
            Scan_Box_Users.countDocuments({ scanedAt: { $gte: start_timestamp , $lt: end_timestamp  }, isClaim: true }),
            Scan_Box_Addons.countDocuments({createdAt: { $gte: start_timestamp- milisecond_per_day, $lt: end_timestamp-milisecond_per_day }}),
            Scan_Box_Addons.countDocuments({createdAt: { $gte: start_timestamp, $lt: end_timestamp }})
        ]) 
        const claimable_box = 3501 * 3 + get_addon * 3
        const result: StatisticBox = {
            user_addon: user_fusion_all_rune,
            active_user: get_user_claim,
            claimable_box,
            claimed_box: total_box_claimed,
            unbox_times: total_unbox,
        }
        return result
    } catch (e) {
        throw e
    }
}
