import { ApolloServer } from "apollo-server";
import { config_PORT } from "../config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs/schema";

export const initGraphQLServer = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            subscriptions: {
              path: '/'
            },
            context: (req) => ({
                ...req,
            }),
      });
      const { url } = await server.listen({ port: config_PORT });
      console.log(`🚀 Apollo server ready at ${url}`);
    } catch (e) {
      throw e;
    }
  };