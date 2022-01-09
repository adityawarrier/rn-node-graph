import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_USERS = gql`
  query GetAllUsers {
    users {
      id
    }
  }
`;

export const Users = (): React.ReactElement => {
  const {loading, error, data} =
    useQuery<{users: {name: string; username: string; id: string}[]}>(
      GET_USERS,
    );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>{loading ? 'loading' : 'LIST'}</Text>
        {error ? (
          <Text>Error</Text>
        ) : (
          data?.users?.map(item => {
            return (
              <View key={item.id}>
                <Text>{item.name}</Text>
                <Text>{item.username}</Text>
                <Text>{item.id}</Text>
              </View>
            );
          })
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
    paddingHorizontal: 20,
    marginTop: 12,
  },
});
