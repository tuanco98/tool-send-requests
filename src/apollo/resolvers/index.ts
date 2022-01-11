import { multiple_request_pr_para_art_create } from "./Mutations/multiple_request_pr_para_art_create";
import { pr_user_fusion } from "./Mutations/pr_user_fusion";
import { pr_user_unbox } from "./Mutations/pr_user_unbox";

const resolvers = {
    Mutation: {
        multiple_request_pr_para_art_create,
        pr_user_unbox,
        pr_user_fusion,
    },
};
export { resolvers };
