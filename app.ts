const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const { connectDB } = require("./db");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("Bienvenido a mi API"));

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use("*", (_req, res) => res.status(404).send("Not Found"));

  app.listen(3000, () => {
    console.log("Escuchando Puerto 3000", 3000);
  });
}

start();
