import { gql } from "apollo-server"

export const typeDefs = gql`
    scalar JSON
    input InputParaart {
        ownerAddress: String!
        ownerName: String
        signature: String!
        createdAt: Float!
        structure: String!
        image: String
        name: String
        runeCount: Int!
        template: Boolean!
    }
    type CreateParaArtResponse {
        errorCode: String!
        errorMessage: String!
        _id: String
    }
    type InfoRequset {
        time: Float
        response: CreateParaArtResponse
    }
    type RequestParaartCreate {
        totalRequest: Int
        errorPercent: Float
        requestCountPerSec: Float
        milisecondPerRequest: Float
        code: Int
        infoRequests: [InfoRequset]
    }
    input CreateOrder {
        contractNft: String!
        currency: String!
        nftId: Int!
        timeEnd: Float!
        initPrice: Float!
        spotPrice: Float!
    }
    input Bid {
        orderId: Int!
        amount: Float!
    }
    type StatisticFusion {
        tokenId: Int
        totalSoilFusion: Float
        totalSoilFusionWPotion: Float
        failedTotalSoilFusion: Float
        failedTotalSoilFusionWPotion: Float
    }
    type StatisticFusionPage{
        total: Float
        data: [StatisticFusion]
    }
    type StatisticBox {
        user_addon: Float
        active_user: Float
        claimable_box: Float
        claimed_box: Float
        unbox_times: Float
    }
    type Mutation {
        multiple_request_pr_para_art_create(http_url: String! request_number: Int!, params: InputParaart!): RequestParaartCreate
        pr_user_unbox(tokenId: Int! private_key: String!): JSON
        pr_user_fusion(runeId: Int! option: [Int] private_key: String!): JSON
        pr_market_create_order(private_key: String! params: CreateOrder!): JSON
        pr_market_bid(private_key: String! params: Bid!): JSON
    }
    type Query {
        statistic_user_fusion_with_date_get(start_timestamp: Float! end_timestamp: Float!): StatisticFusionPage
        statistic_box_with_date_get(mod_key: String start_timestamp: Float! end_timestamp: Float!): StatisticBox
    }

`
