import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionScreen = () => {

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
    ...StyleSheet.absoluteFillObject
  },
  textStyleThree: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    backgroundColor: 'pink'
  }
});

/**
 *
 position: 'absolute',
 top: 0,
 right: 0,
 bottom:0,
 left: 0,

 Above style cause child element to cover all the space in the parent component.
 But in the react native there is a one single line of code which is equal to the
 above five line of code. absolute

 That is : ...StyleSheet.absoluteFillObject
 */

export default PositionScreen;