//import liraries
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

// create a component
const Button = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default Button;
