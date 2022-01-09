import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    userName: String!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

export { typeDefs };
