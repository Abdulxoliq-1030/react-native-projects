//import liraries
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

// create a component
const Button = ({text, routeName}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => navigation.push(`${routeName}`)}
        style={styles.btn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default Button;
