import { Fusions } from "../../../mongodb"
import { config_MOD_KEY } from '../../../config';
export const statistic_user_fusion_with_date_get = async (root: any, args: any) => {
    try {
        const { start_timestamp, end_timestamp, mod_key } = args as { start_timestamp: number; end_timestamp: number; mod_key: string }
        if (mod_key !== config_MOD_KEY) throw new Error("False")
        const get_fusion = await Fusions.find({ createdAt: { $gte: start_timestamp, $lt: end_timestamp } }).toArray()
        return {
            total: get_fusion.length,
            data: filter_data(get_fusion)
        }
    } catch (e) {
        throw e
    }
}

type StatisticFusionRune = {
    runeId: number,
    totalSoilFusion: number,
    totalSoilFusionWPotion: number,
    failedTotalSoilFusion: number,
    failedTotalSoilFusionWPotion: number,
}

const initArray = () => {
    const result: StatisticFusionRune[] = []
    for (let i = 0; i < 12; i++) {
        result.push({
            runeId: i,
            totalSoilFusion: 0,
            totalSoilFusionWPotion: 0,
            failedTotalSoilFusion: 0,
            failedTotalSoilFusionWPotion: 0
        })
    }
    return result
}
const filter_data = (dataFusion: any[]) => {
    const initFusion: StatisticFusionRune[] = initArray()

    for (let data of dataFusion) {
        const findData = initFusion.find((item) => {
            if (item.runeId === data.runeId) {
                if (data.option.length) {
                    if (data.result === false) {
                        item.failedTotalSoilFusionWPotion += 1
                        item.failedTotalSoilFusion += 1
                    }
                    item.totalSoilFusionWPotion += 1
                } else {
                    if (data.result === false) {
                        item.failedTotalSoilFusion += 1
                    }
                }
                item.totalSoilFusion += 1
            }
        })
    }
    return initFusion
}