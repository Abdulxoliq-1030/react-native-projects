//import liraries
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {nearby, parties, users} from './data';
import styles from './style';
// create a component
const Base = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputWrap}>
        <View style={styles.inputLeft}>
          <AntDesign name="search1" size={18} style={{marginRight: 10}} />
          <TextInput placeholder="Search parties or people" />
        </View>
        <TouchableOpacity>
          <EvilIcons name="bell" size={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Friends</Text>
        <TouchableOpacity>
          <Text style={{color: '#E57814'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {users.map(item => (
          <TouchableOpacity
            style={{alignItems: 'center', margin: 10}}
            key={item.id}>
            <Image
              style={{height: 60, width: 60, borderRadius: 100}}
              source={{uri: item.image}}
            />
            <Text style={{marginTop: 7}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Featured</Text>
        <TouchableOpacity>
          <Text style={{color: '#E57814'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {parties.map(item => (
          <View
            key={item.id}
            style={{paddingHorizontal: 15, position: 'relative'}}>
            <Image
              style={{height: 132, width: 249, borderRadius: 6}}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.showUsers}>
              <Text style={{color: '#fff', fontSize: 16}}>
                <AntDesign name="user" size={16} /> {item.view}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{paddingVertical: 5, color: '#9C9CA2'}}>
                16 Mar, 7:00PM • 1.3 mi
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            paddingHorizontal: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Parties nearby</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../../assets/images/filter.png')} />
            <Text style={{color: '#E57814', marginLeft: 5}}>Filter</Text>
          </TouchableOpacity>
        </View>
        {nearby.map(item => (
          <TouchableOpacity key={item.image} style={{paddingHorizontal: 15}}>
            <Image
              style={{
                height: 180,
                width: '100%',
                borderRadius: 6,
                marginVertical: 10,
              }}
              source={{
                uri: item.image,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default Base;
