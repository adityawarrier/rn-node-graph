import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer, ServerInfo } from "apollo-server";
import { ConfigHelper, ConfigKeys, Logger } from "./utils";
import { resolvers, typeDefs } from "./graphql";

dotenv.config();
const app = express();

app.use(cors());

app.listen(ConfigHelper.getItem(ConfigKeys.PORT), async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  try {
    const serverInfo: ServerInfo = await apolloServer.listen();
    Logger.info(
      `GraphQL server up at URL: ${serverInfo.url}, PORT: ${serverInfo.port}!`
    );
  } catch (error: any) {
    Logger.error(error);
  }
});
