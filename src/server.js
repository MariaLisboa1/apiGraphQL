const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const path = require("path");
const resolvers = require("./resolvers");

mongoose.connect("mongodb+srv://study:M@ria123@cluster0-254bk.mongodb.net/graphql?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers
});

server.start();