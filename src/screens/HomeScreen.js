import React from 'react';
import {
  Text, StyleSheet, View, Button, TouchableOpacity,
} from 'react-native';

const HomeScreen = (props) => {
  // console.log(props);

  return (
      <View>
        <Text style={styles.text}>Hello World!</Text>
        <Button
            onPress={() => {
              console.log('Components Button Pressed!');
              props.navigation.navigate('Components');
            }}
            title={'Go to Components Demo'}
        />
        <Button
            onPress={() => {
              console.log('List Button Pressed!');
              props.navigation.navigate('List');
            }}
            title={'Go to List Demo'}
        />
        <Button
            onPress={() => {
              console.log('Images List Button Pressed!');
              props.navigation.navigate('Images');
            }}
            title={'Go to Images List Demo'}
        />
        <Button
            onPress={() => {
              console.log('Counter Button Pressed!');
              props.navigation.navigate('Counter');
            }}
            title={'Go to Counter Demo'}
        />
        <Button
            onPress={() => {
              console.log('Color Button Pressed!');
              props.navigation.navigate('Color');
            }}
            title={'Go to Color Demo'}
        />
        <Button
            onPress={() => {
              console.log('Square Button Pressed!');
              props.navigation.navigate('Square');
            }}
            title={'Go to Square Demo'}
        />
        {/*<TouchableOpacity*/}
        {/*    onPress={() => {*/}
        {/*      console.log('List Pressed!');*/}
        {/*      props.navigation.navigate('List');*/}
        {/*    }}*/}
        {/*>*/}
        {/*  <Text>Go to List Demo</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  }
});

export default HomeScreen;
