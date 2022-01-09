import { MovieList, UserList } from "../../data";

export const resolvers = {
  Query: {
    users: () => UserList,
    user: (_, args) => {
      const { id } = args;

      const user = UserList.find((u) => u.id === parseInt(id, 10));
      return user;
    },

    movies: () => MovieList,
    movie: (_, args) => {
      const { id } = args;

      const movie = MovieList.find((m) => m.id === parseInt(id, 10));
      return movie;
    },
  },
  User: {
    favouriteMovies: () => MovieList,
  },
};
