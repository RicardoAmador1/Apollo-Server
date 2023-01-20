const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    getPokemon: [String!]!
    getRandomImage(Pokemon: String!): String!

}
`;

module.exports = { typeDefs };
