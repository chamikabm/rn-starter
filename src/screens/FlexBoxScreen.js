import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexBoxScreen = () => {

  return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyleOne}>Child #1</Text>
        <Text style={styles.textStyleTwo}>Child #2</Text>
        <Text style={styles.textStyleThree}>Child #3</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: 'black',
    flexDirection: 'column',
    height: 100,
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },
  textStyleOne: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    backgroundColor: 'orange',
  },
  textStyleTwo: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'center',
    minWidth: 250,
    backgroundColor: 'gray',
  },
  textStyleThree: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    backgroundColor: 'pink'
  }
});

export default FlexBoxScreen;
