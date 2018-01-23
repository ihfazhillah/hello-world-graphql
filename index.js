var express = require("express"),
  makeExecutableSchema = require("graphql-tools").makeExecutableSchema,
  graphqlExpress = require("apollo-server-express").graphqlExpress,
  app = express();

var typeDefs = `
type Query{
  hello: String
}`;

var resolvers = {
  Query: {
    hello() {
      return "hello world";
    }
  }
};

var schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });

app.use("/graphql", graphqlExpress({ schema: schema }));

app.listen(3000, () => console.log("server berjalan di http://localhost:3000"));
