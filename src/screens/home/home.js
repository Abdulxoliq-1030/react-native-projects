import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Stories} from '../../components';

const Home = () => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingTop: 55,
          alignItems: 'center',
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Instagram</Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>
      <ScrollView>
        <Stories />
      </ScrollView>
    </View>
  );
};

export default Home;
