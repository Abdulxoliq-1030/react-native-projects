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
import styles from './style';
// create a component
const Base = () => {
  const users = [
    {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Melissa',
      id: 0,
    },
    {
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: 'David',
      id: 1,
    },
    {
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Marilyn',
      id: 2,
    },
    {
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Tessa',
      id: 3,
    },
    {
      image:
        'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Jane',
      id: 4,
    },
    {
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Alex',
      id: 5,
    },
  ];

  const parties = [
    {
      image:
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      name: 'David',
      id: 1,
      view: 14,
      title: 'Shawn’s B-Day Party',
    },
    {
      image:
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Marilyn',
      id: 2,
      view: 12,
      title: 'BBQ Party with Friend',
    },
    {
      image:
        'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Tessa',
      id: 3,
      view: 346,
      title: 'BBQ Party with Friend',
    },
    {
      image:
        'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Jane',
      id: 4,
      view: 298,
      title: 'Shawn’s B-Day Party',
    },
    {
      image:
        'https://media.istockphoto.com/id/1408244446/photo/mexican-fans-celebrating-a-goal-in-soccer-game-at-bar.jpg?b=1&s=170667a&w=0&k=20&c=9z5ft9zNlCZNpsTUHFRkyg35n-xKJkB0tJmJ5LC6njk=',
      name: 'Alex',
      id: 5,
      view: 312,
      title: 'BBQ Party with Friend',
    },
  ];

  const nearby = [
    {
      image:
        'https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      image:
        'https://media.istockphoto.com/id/1438600064/photo/christmas-celebration-in-office.jpg?b=1&s=170667a&w=0&k=20&c=v_uRYy3mHQriBKSJcwIkOekM2vuo-urT3Rk5j-2gtWs=',
    },
  ];

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
          <TouchableOpacity style={{paddingHorizontal: 15}}>
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
