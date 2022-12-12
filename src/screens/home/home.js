import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Post, Stories} from '../../components';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.wrapper}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text style={styles.text}>Instagram</Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
