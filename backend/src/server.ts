import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import { ConfigHelper, ConfigKeys, Logger } from "./utils";

dotenv.config();
const app = express();

app.use(cors());

app.listen(ConfigHelper.getItem(ConfigKeys.PORT), () => {
  const apolloServer = new ApolloServer({});

  try {
    apolloServer.listen();
    Logger.log("GraphQL server up!");
  } catch (error: any) {
    Logger.error(error);
  }
});
