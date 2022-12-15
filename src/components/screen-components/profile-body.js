//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
      {accountName ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: '#000',
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="plus-square"
              style={{fontSize: 25, color: '#000', paddingHorizontal: 15}}
            />
            <Feather
              name="menu"
              style={{
                fontSize: 25,
              }}
            />
          </View>
        </View>
      ) : null}
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
    </View>
  );
};

export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name,
                accountName,
                profileImage,
              })
            }
            style={{
              width: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: 35,
                borderRadius: 5,
                boderColor: '#dedede',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}>
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
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
