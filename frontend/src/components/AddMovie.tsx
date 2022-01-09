import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {gql, useMutation, useQuery} from '@apollo/client';

const GET_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      yearOfPublication
      id
    }
  }
`;

const ADD_MOVIE = gql`
  mutation CreateMovie($movie: CreateMovieInput) {
    createMovie(movie: $movie) {
      name
      yearOfPublication
    }
  }
`;

export const AddMovie = (): React.ReactElement => {
  const [input, setInput] = useState('');

  const {loading, data} =
    useQuery<{movies: {name: string; yearOfPublication: string; id: string}[]}>(
      GET_MOVIES,
    );

  const [addMovie] = useMutation<
    {
      movie: {name: string; yearOfPublication: string};
    },
    {movie: {name: string}}
  >(ADD_MOVIE, {
    refetchQueries: [GET_MOVIES],
    fetchPolicy: 'no-cache',
    onCompleted: () => {
      setInput('');
    },
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={{marginBottom: 24}}>{loading ? 'loading' : 'LIST'}</Text>
        {data?.movies?.map(item => {
          return (
            <View key={item.id} style={{marginVertical: 12}}>
              <Text>{item.name}</Text>
              <Text>{item.yearOfPublication}</Text>
            </View>
          );
        })}
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TextInput
            value={input}
            onChangeText={(text: string) => {
              setInput(text);
            }}
            style={styles.input}
          />
          <Button
            title="Add Movie"
            onPress={() => {
              addMovie({variables: {movie: {name: input}}});
            }}
            disabled={!input}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  input: {
    borderColor: '#cacaca',
    borderWidth: 1,
    width: '90%',
  },
});
