import { gql } from "apollo-server";

const typeDefs = gql`
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    userName: String!
    nationality: Nationality!
    friends: [User!]
    favouriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(id: ID!): Movie
  }
`;

export { typeDefs };
