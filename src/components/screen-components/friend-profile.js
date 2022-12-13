//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ProfileBody, ProfileButtons} from './profile-body';
import {FriendsProfileData} from './data-base';

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
      <ProfileButtons id={1} />
      <Text style={styles.suggestText}>Suggested for you</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingTop: 10}}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map(data => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [close, setClose] = useState(false);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [isFollow, setIsFollow] = useState(false);
              return (
                <View key={data.name}>
                  {data.name === name || close ? null : (
                    <View style={styles.suggestWrapper}>
                      <TouchableOpacity
                        onPress={() => setClose(!close)}
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                        }}>
                        <AntDesign
                          name="close"
                          style={{
                            fontSize: 20,
                            color: '#000',
                            opacity: 0.5,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={styles.suggestImage}
                      />
                      <Text style={{fontWeight: 'bold'}}>{data.name}</Text>
                      <Text style={{fontSize: 12}}>{data.accountName}</Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{
                          width: '80%',
                          paddingVertical: 10,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? null : '#3493d9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: isFollow ? 1 : 0,
                            borderColor: '#dedede',
                          }}>
                          <Text style={{color: isFollow ? '#000' : '#fff'}}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
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
  suggestText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  suggestWrapper: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dedede',
    borderRadius: 2,
  },
  suggestImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
});
