//import liraries
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Button} from '../../../components';

// create a component
const Streak = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(true);

  const phoneInput = useRef();

  console.log(formattedValue);

  return (
    <View style={styles.container}>
      <View style={styles.textWrap}>
        <Text style={{fontSize: 25, fontWeight: 'bold', paddingVertical: 15}}>
          Welcome to Streak
        </Text>
        <Text style={{lineHeight: 24}}>
          Whether you’re creating an account or signing back in, let’s start
          with your number
        </Text>
      </View>
      <View style={styles.container}>
        <PhoneInput
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: valid ? '#000' : 'red',
            borderWidth: 1,
            borderRadius: 6,
          }}
          textContainerStyle={{
            backgroundColor: 'transparent',
          }}
          ref={phoneInput}
          placeholder="phone number"
          defaultValue={value}
          defaultCode="DM"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        {valid ? (
          ''
        ) : (
          <View>
            <Text style={{color: 'red'}}>Incorrect phone number</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setValid(checkValid ? checkValid : false);
          }}>
          <Button text="Continue" routeName={valid ? 'VerifyPhone' : ''} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  textWrap: {
    marginTop: 50,
  },

  input: {
    marginTop: 25,
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    borderRadius: 6,
  },
  continueBtn: {
    width: '100%',
    marginTop: 30,
  },
});

//make this component available to the app
export default Streak;
