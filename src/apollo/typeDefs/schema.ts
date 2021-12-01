import { gql } from "apollo-server"

export const typeDefs = gql`
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
        multiple_request_pr_para_art_create(request_number: Int!, params: InputParaart!): RequestParaartCreate
    }
`
