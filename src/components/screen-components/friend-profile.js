//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ProfileBody from './profile-body';

// create a component
const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, follow, post, followers, following} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={styles.arrowIcon} />
        </TouchableOpacity>
        <View style={styles.moreAndName}>
          <Text style={styles.userName}>{name}</Text>
          <Feather name="more-vertical" style={styles.moreVertical} />
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        follow={follow}
        post={post}
        followers={followers}
        following={following}
      />
    </View>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },

  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },

  arrowIcon: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },

  moreAndName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },

  userName: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  moreVertical: {
    fontSize: 20,
    color: '#000',
  },
});
