import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {
  ProfileBody,
  ProfileButtons,
} from '../../components/screen-components/profile-body';
import {BottomTabView} from '../../components';

const Profile = () => {
  let circuls = [];
  let numberOfCircle = 10;

  for (let i = 0; i < numberOfCircle; i++) {
    circuls.push(
      <View key={i}>
        {i === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: '#000'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: '#000',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ProfileBody
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../assets/images/userProfile.png')}
          followers="3.6M"
          following="35"
          post="458"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="mr_peobody"
          profileImage={require('../../assets/images/userProfile.png')}
        />
      </View>
      <View>
        <Text style={styles.storyHighlightText}>Story Highlights</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewWrap}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;
