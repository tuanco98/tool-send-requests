import { multiple_request_pr_para_art_create } from "./Mutations/multiple_request_pr_para_art_create"
import { pr_market_bid } from "./Mutations/pr_market_bid"
import { pr_market_create_order } from "./Mutations/pr_market_create_order"
import { pr_user_fusion } from "./Mutations/pr_user_fusion"
import { pr_user_unbox } from "./Mutations/pr_user_unbox"
import { statistic_box_with_date_get } from "./Queries/statistic_box_with_date_get"
import { statistic_user_fusion_with_date_get } from "./Queries/statistic_user_fusion_with_date_get"

const resolvers = {
    Mutation: {
        multiple_request_pr_para_art_create,
        pr_user_unbox,
        pr_user_fusion,
        pr_market_create_order,
        pr_market_bid,
    },
    Query: {
        statistic_user_fusion_with_date_get,
        statistic_box_with_date_get,
    },
}
export { resolvers }
