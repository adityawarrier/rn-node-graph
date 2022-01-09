import { gql } from "apollo-server";

const typeDefs = gql`
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
    INDIAN
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    username: String!
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

  input CreateUser {
    name: String!
    age: Int = 18
    userName: String!
    nationality: Nationality!
  }

  type Mutation {
    createUser(input: CreateUser!): User!
    updateUserName(userName: String!, id: ID!): User!
    deleteUser(id: ID!): [User!]
  }
`;

export { typeDefs };
