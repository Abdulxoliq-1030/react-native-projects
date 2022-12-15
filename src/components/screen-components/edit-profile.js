//import liraries
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';

// create a component
const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Successfully !', ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={styles.checkIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageWrapper}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.changeProfileText}>Change profile photo</Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
              marginVertical: 10,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
              marginVertical: 10,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.switchText}>Switch to Professional account</Text>
        <Text style={styles.switchText}>Personal information setting</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    padding: 10,
  },

  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  checkIcon: {
    fontSize: 35,
    color: '#3493d9',
  },
  profileImageWrapper: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  changeProfileText: {
    color: '#3493d9',
  },

  switchText: {
    marginVertical: 10,
    padding: 10,
    color: '#3493d9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#efefef',
  },
});

//make this component available to the app
export default EditProfile;
