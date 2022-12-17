//import liraries
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

// create a component
const Input = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#9C9CA2'}}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

//make this component available to the app
export default Input;
