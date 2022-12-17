//import liraries
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-datepicker';
import {Button, Input} from '../../../components';
import styles from './style';

const inputLabel = ['Your name', 'Create a username', 'Email'];

// create a component
const CreateProfile = () => {
  const gender = ['Male', 'Female'];
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.headText}>Create profile</Text>
        <Text style={styles.descriptText}>Upload profile picture</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <View style={styles.avatarWrap}>
            <Image
              style={styles.avatarImg}
              source={require('../../../assets/images/user.jpg')}
            />
            <TouchableOpacity
              onPress={() => console.log('Clicked')}
              style={styles.closeIcon}>
              <AntDesign name="close" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrap}>
            {inputLabel.map(item => (
              <Input key={item} label={item} />
            ))}
            <Text style={{color: '#9C9CA2'}}>Birthday</Text>
            <DatePicker
              style={styles.datePicker}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              iconSource={require('../../../assets/icons/calender.png')}
              minDate="2016-05-01"
              maxDate="2030-06-01"
              confirmBtnText="Done"
              cancelBtnText="Birthday"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  width: 25,
                  height: 25,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  height: 50,
                  alignItems: 'flex-start',
                  borderTopColor: '#F2F2F5',
                  borderBottomColor: '#F2F2F5',
                  borderLeftColor: '#fff',
                  borderRightColor: '#fff',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
            <Text style={{color: '#9C9CA2'}}>Gender</Text>
            <SelectDropdown
              buttonStyle={styles.btnStyle}
              buttonTextStyle={styles.btnTextStyle}
              dropdownStyle={styles.dropdownStyle}
              defaultValue="Male"
              renderDropdownIcon={() => (
                <MaterialIcons
                  name="arrow-drop-down"
                  style={{color: '#000', fontSize: 32}}
                />
              )}
              rowTextStyle={styles.dropdownTextStyle}
              data={gender}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={{marginTop: 20, width: '100%'}}>
            <Button text="Continue" />
          </View>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            By creating account you confirm you have read and agree with{' '}
            <Text style={{color: '#E57814'}}>Streak Terms & Conditions</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default CreateProfile;
