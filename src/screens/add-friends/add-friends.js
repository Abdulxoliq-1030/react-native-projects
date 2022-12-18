import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../../components';
import styles from './style';

const users = [
  {
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Melissa Johnson',
    id: 0,
  },
  {
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'David Torres',
    id: 1,
  },
  {
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Marilyn Lewis',
    id: 2,
  },
  {
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    name: 'Tessa Hard',
    id: 3,
  },
];

const invitePeople = [
  {
    name: 'Melissa Johnson',
    id: 0,
  },
  {
    name: 'David Torres',
    id: 1,
  },
  {
    name: 'Marilyn Lewis',
    id: 2,
  },
  {
    name: 'Tessa Hard',
    id: 3,
  },
];

// create a component
const AddFriends = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 70, fontSize: 25, fontWeight: 'bold'}}>
        Add friends
      </Text>
      <View style={styles.inputWrap}>
        <AndDesign
          style={{marginRight: 10}}
          name="search1"
          size={20}
          color="#9C9CA2"
        />
        <TextInput
          style={{padding: 5, fontSize: 18}}
          placeholder="Search people"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Contacts on Streak
        </Text>
        <ScrollView style={{marginTop: 20, height: '70%'}}>
          <View>
            {users.map(({name, image, id}) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [friend, setFriend] = useState(false);
              return (
                <View
                  key={id}
                  style={[
                    styles.userStyle,
                    {
                      justifyContent: 'space-between',
                      borderBottomColor: '#ddd',
                      borderBottomWidth: 1,
                      paddingVertical: 20,
                    },
                  ]}>
                  <View style={styles.userStyle}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{height: 50, width: 50, borderRadius: 100}}
                        source={{uri: image}}
                      />
                      <Text style={{fontSize: 18, marginLeft: 10}}>{name}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setFriend(!friend)}>
                    <Text
                      style={{
                        color: friend ? '#E57814' : '#C5C5CD',
                        fontSize: 18,
                      }}>
                      {friend ? 'Add friend' : 'Added'}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Invite people
            </Text>
            <View>
              {invitePeople.map(({name, image, id}) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [invite, setInvite] = useState(false);
                return (
                  <View
                    key={id}
                    style={[
                      styles.userStyle,
                      {
                        justifyContent: 'space-between',
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                        paddingVertical: 20,
                      },
                    ]}>
                    <View style={styles.userStyle}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                            backgroundColor: '#F0F0F0',
                          }}
                          source={require('../../assets/images/hide-user.png')}
                        />
                        <Text style={{fontSize: 18, marginLeft: 10}}>
                          {name}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setInvite(!invite)}>
                      <Text
                        style={{
                          color: invite ? '#E57814' : '#C5C5CD',
                          fontSize: 18,
                        }}>
                        {invite ? 'Send invite' : 'Sent'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <Button text="Continue" routeName="Base" />
        </ScrollView>
      </View>
    </View>
  );
};

//make this component available to the app
export default AddFriends;
