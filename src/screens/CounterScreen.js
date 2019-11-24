import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [cc, setCounter] = useState(0);

  return (
      <View>
        <Button
            onPress={() => {
              setCounter(cc + 1);
              console.log(cc)
            }}
            title={'Increase'}
        />
        <Button
            onPress={() => {
              setCounter(cc - 1);
              console.log(cc)
            }}
            title={'Decrease'}
        />
        <Text>{`Current count is : ${cc}`}</Text>
      </View>
  );
};

const styles = StyleSheet.create({

});

export default CounterScreen;