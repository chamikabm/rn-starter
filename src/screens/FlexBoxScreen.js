import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxScreen = () => {

  return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  }
});

export default FlexBoxScreen;
