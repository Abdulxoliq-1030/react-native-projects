//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// create a component
export const ProfileBody = ({
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

export const ProfileButtons = ({id}) => {
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? null : (
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={{width: '42%'}}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493d9',
                borderWidth: follow ? 1 : 0,
                borderColor: '#dedede',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: follow ? '#000' : '#fff'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.messageWrap}>
            <Text>Message</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#dedede',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather
              name="chevron-down"
              style={{fontSize: 20, color: '#000'}}
            />
          </View>
        </View>
      )}
    </>
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

  btnWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  messageWrap: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
