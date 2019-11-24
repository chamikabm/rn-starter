import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  return (
      <View>
        <Text>{color}</Text>
        <Button
            onPress={() => {
              console.log(`Increase ${color}`);
              onIncrease();
            }}
            title={`Increase ${color}`}
        />
        <Button
            onPress={() => {
              console.log(`Decrease ${color}`);
              onDecrease();
            }}
            title={`Decrease ${color}`}
        />
      </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorCounter;