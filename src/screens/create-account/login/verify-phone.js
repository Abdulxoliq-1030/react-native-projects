//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const VerifyPhone = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} style={{fontWeight: 'bold'}} />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#4A4A4A'}}>VerifyPhone</Text>
        <Text>{'       '}</Text>
      </View>
      <View style={styles.verifyZone}>
        <Text style={styles.verifyMessageText}>
          Please enter the 4-digit confirmation code we’ve sent to +1 9324 032
          423
        </Text>
        <TextInput style={styles.textInput} placeholder="verify code" />
        <Text>
          Didn’t get the code?{' '}
          <Text
            onPress={() => console.log('Clickde')}
            style={styles.resendText}>
            Resend
          </Text>
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 80,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },

  verifyZone: {
    padding: 20,
  },

  verifyMessageText: {
    lineHeight: 24,
    fontSize: 15,
  },

  textInput: {
    marginVertical: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderColor: '#000',
    borderWidth: 1,
  },

  resendText: {
    alignItems: 'center',
    color: '#E57814',
  },
});

//make this component available to the app
export default VerifyPhone;
