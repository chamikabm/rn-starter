/**
  In this demo we will be using the community standard for the reducer action
  object. Compare the Version 2 and 3.
 */
import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  // state = { red: number, green: number, blue: number }
  // action definition will be bit different from the version 2.
  // action = { type: 'change_red' || 'change_green' || 'change_blue',  payload : 15 || -15 }

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 225 || state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 225 || state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 225 || state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red : 0, green: 0, blue: 0});
  const { red, green, blue } = state;

  // const [state, runMyReducer] = useReducer(reducer, { red : 0, green: 0, blue: 0});
  // This is the meaning of the dispatch action.

  return (
      <View>
        <ColorCounter
            onIncrease={() => dispatch({
              type: 'change_red',
              payload: COLOR_INCREMENT
            })}
            onDecrease={() => dispatch({
              type: 'change_red',
              payload: -1 * COLOR_INCREMENT
            })}
            color={'Red'}
        />
        <ColorCounter
            onIncrease={() => dispatch({
              type: 'change_green',
              payload: COLOR_INCREMENT
            })}
            onDecrease={() => dispatch({
              type: 'change_green',
              payload: -1 * COLOR_INCREMENT
            })}
            color={'Green'}
        />
        <ColorCounter
            onIncrease={() => dispatch({
              type: 'change_blue',
              payload: COLOR_INCREMENT
            })}
            onDecrease={() => dispatch({
              type: 'change_blue',
              payload: -1 * COLOR_INCREMENT
            })}
            color={'Blue'}
        />
        <View style={{
          width: 100,
          height: 100,
          backgroundColor:`rgb(${red},${green},${blue})`}}
        />
      </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;