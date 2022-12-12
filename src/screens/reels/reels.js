import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ReelsComponent} from '../../components';
import styles from './styles';
const Reels = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
