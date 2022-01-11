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
    type Query {
        test: String
    }
    type Mutation {
        multiple_request_pr_para_art_create(http_url: String! request_number: Int!, params: InputParaart!): RequestParaartCreate
        pr_user_unbox(tokenId: Int! private_key: String!): JSON
        pr_user_fusion(runeId: Int! option: [Int] private_key: String!): JSON
    }
`
