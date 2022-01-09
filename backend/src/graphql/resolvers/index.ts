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

  Mutation: {
    createUser: (_, args) => {
      const { input } = args;

      UserList.push({
        ...input,
        ...{
          id: UserList.length + 1,
        },
      });

      return UserList[UserList.length - 1];
    },

    updateUserName: (_, args) => {
      const { userName, id } = args;

      const user = UserList.find((u) => u.id === parseInt(id, 10));

      if (!user) return null;

      user.username = userName;
      return user;
    },

    deleteUser: (_, args) => {
      const { id } = args;

      const userIndex = UserList.findIndex((u) => u.id === parseInt(id, 10));

      if (userIndex === -1) return null;

      UserList.splice(userIndex, 1);

      return UserList;
    },

    createMovie: (_, args) => {
      const { movie } = args;

      MovieList.push({
        ...movie,
        ...{
          id: MovieList.length + 1,
        },
      });

      return MovieList[MovieList.length - 1];
    },
  },

  User: {
    favouriteMovies: () => MovieList,
  },
};
