//import liraries
import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

// create a component
const FlatText = ({headingText, description}) => {
  return (
    <View style={styles.flatTextWrapper}>
      <Text style={styles.flatFirstText}>{headingText}</Text>
      <Text style={{textAlign: 'center', lineHeight: 27, fontSize: 15}}>
        {description}
      </Text>
    </View>
  );
};

export default FlatText;
