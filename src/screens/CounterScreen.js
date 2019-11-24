import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
      <View>
        <Button
            onPress={() => {
              setCounter(counter + 1);
              console.log(counter)
            }}
            title={'Increase'}
        />
        <Button
            onPress={() => {
              setCounter(counter - 1);
              console.log(counter)
            }}
            title={'Decrease'}
        />
        <Text>{`Current count is : ${counter}`}</Text>
      </View>
  );
};

const styles = StyleSheet.create({

});

export default CounterScreen;