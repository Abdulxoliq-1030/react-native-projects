import React from 'react';
import {View, Text, TextInput} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        marginTop: 50,
      }}>
      <IonicIcons
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          backgroundColor: '#ebebeb',
          width: '94%',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          fontSize: 15,
          paddingLeft: 40,
        }}
      />
    </View>
  );
};

export default SearchBox;
