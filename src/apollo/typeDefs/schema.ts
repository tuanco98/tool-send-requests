import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        test: String
    }
    type Mutation {
        send_requests(http_url: String request_cout: Int query: String): String
    }
`;
