import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {

  return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
  },
});

export default BoxScreen;