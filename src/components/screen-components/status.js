import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {useEffect} from 'react';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={{
        backgroundColor: '#000',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 55,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: '#fff',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 50,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              height: '92%',
              width: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: '#fff', fontSize: 14, padding: 10}}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonicIcons
              name="close"
              style={{fontSize: 20, color: '#fff', opacity: 0.6, marginTop: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
          width: '95%',
        }}>
        <TextInput
          placeholder="send message..."
          placeholderTextColor="#fff"
          style={{
            borderColor: '#ddd',
            borderRadius: 25,
            width: '85%',
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 18,
            color: '#ddd',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={{fontSize: 30, color: '#ddd'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
