import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {gql, useLazyQuery} from '@apollo/client';

const GET_MOVIE = gql`
  query Movie($movieId: ID!) {
    movie(id: $movieId) {
      name
      yearOfPublication
    }
  }
`;

export const Movies = (): React.ReactElement => {
  const [input, setInput] = useState('');
  const [getMovie, {loading, error, data}] =
    useLazyQuery<{movie: {name: string; yearOfPublication: number}}>(GET_MOVIE);

  useEffect(() => {
    if (!input) {
      return;
    }
    getMovie({variables: {movieId: input}});
  }, [input, getMovie]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          value={input}
          onChangeText={(text: string) => {
            setInput(text);
          }}
          style={styles.input}
        />
        {loading && <Text>Loading...</Text>}
        {data?.movie && (
          <View>
            <Text>{data.movie.name}</Text>
            <Text>{data.movie.yearOfPublication}</Text>
          </View>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#cacaca',
    borderWidth: 1,
    width: '80%',
  },
});
