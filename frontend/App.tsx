import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Hey MFs!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
