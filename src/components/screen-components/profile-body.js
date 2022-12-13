//import liraries
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

// create a component
const ProfileBody = ({
  name,
  profileImage,
  accountName,
  follow,
  post,
  followers,
  following,
}) => {
  return (
    <View style={styles.container}>
      {accountName ? null : (
        <View style={styles.wrapper}>
          <View style={styles.profileWrapper}>
            <Image source={profileImage} style={styles.profileImage} />
            <Text style={styles.userName}>{name}</Text>
          </View>
          <View style={styles.postsCount}>
            <Text style={styles.postText}>{post}</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.postsCount}>
            <Text style={styles.postText}>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.postsCount}>
            <Text style={styles.postText}>{following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  profileWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  userName: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  postsCount: {
    alignItems: 'center',
  },
  postText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProfileBody;
