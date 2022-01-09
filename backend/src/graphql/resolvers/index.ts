import { UserList } from "../../data";

export const resolvers = {
  Query: {
    users: () => UserList,
  },
};
