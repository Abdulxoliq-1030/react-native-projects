import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {FriendsProfileData} from '../../components/screen-components/data-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Activity = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity</Text>
      <ScrollView style={{margin: 10}} showsHorizontalScrollIndicator={false}>
        <Text style={styles.weekText}>This Week</Text>
        <View style={styles.namesWrap}>
          {FriendsProfileData.slice(0, 3).map(data => {
            return (
              <TouchableOpacity
                key={data.name}
                onPress={() =>
                  navigation.push('FriendProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }>
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text>Started following you</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>Earliner</Text>
        {FriendsProfileData.slice(3, 6).map(data => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={data.name} style={{width: '100%'}}>
              <View style={styles.touchableImageWrapper}>
                <TouchableOpacity style={styles.touchableImage}>
                  <Image
                    source={data.profileImage}
                    style={styles.profileImage}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                    you might know is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: follow ? 72 : 68,
                    backgroundColor: !follow ? '#3493d9' : null,
                    borderRadius: 5,
                    borderWidth: !follow ? 0 : 0.5,
                  }}>
                  <View style={styles.followBtnWrap}>
                    <Text style={{color: !follow ? '#fff' : '#000'}}>
                      {!follow ? 'Follow' : 'Following'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={styles.suggestionTitle}>Suggestion for you</Text>
        {FriendsProfileData.slice(6, 12).map(data => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [follow, setFollow] = useState(data.follow);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [close, setClose] = useState(false);
          return (
            <View key={data.profileImage}>
              {close ? null : (
                <View style={styles.profileImageWrap}>
                  <View>
                    <TouchableOpacity style={styles.suggestionWrap}>
                      <Image
                        style={styles.suggestionImage}
                        source={data.profileImage}
                      />
                      <View style={styles.textWrapper}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {data.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Suggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{
                          width: follow ? 90 : 68,
                        }}>
                        <View
                          style={{
                            width: follow ? 72 : 68,
                            backgroundColor: !follow ? '#3493d9' : null,
                            borderRadius: 5,
                            borderWidth: !follow ? 0 : 0.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: '#dedede',
                            height: 30,
                          }}>
                          <Text style={{color: follow ? '#000' : '#fff'}}>
                            {follow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollow(!follow)}
                          style={{
                            width: follow ? 90 : 68,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 30,
                              borderRadius: 5,
                              backgroundColor: follow ? null : '#3493D9',
                              borderWidth: follow ? 1 : 0,
                              borderColor: '#DEDEDE',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: follow ? 'black' : 'white'}}>
                              {follow ? 'following' : 'follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setClose(true)}
                          style={{paddingHorizontal: 10}}>
                          <AntDesign
                            name="close"
                            style={{fontSize: 14, color: 'black', opacity: 0.8}}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493d9'}}>See all suggestion</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Activity;
