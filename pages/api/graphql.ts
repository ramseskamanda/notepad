import { initializeMongoConnector } from "@graphql/mongodb-connector";
import { resolvers } from "@graphql/resolvers";
import { typeDefs } from "@graphql/schema";
import { ApolloServer } from "apollo-server-micro";
/* Disclaimer: got a lot of this code from https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql */

const connector = initializeMongoConnector();
const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await connector;
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
