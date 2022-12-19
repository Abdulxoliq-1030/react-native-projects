import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddFriends} from './src/screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import {CreateProfile, Login, Onboarding} from './src/screens/create-account';
import VerifyPhone from './src/screens/create-account/login/verify-phone';
import {Base, Chat, Party, Profile} from './src/screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  const [splash, setSplash] = useState(true);

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 85,
          },
          tabBarIcon: ({focused, size}) => {
            let iconName;
            let color;
            let name;
            if (route.name === 'Base') {
              iconName = focused ? 'home' : 'home';
              size = focused ? size + 8 : size + 2;
              color = focused ? '#E57814' : '#C5C5CD';
              name = focused ? 'Home' : 'Home';
            } else if (route.name === 'Party') {
              iconName = focused ? 'calendar' : 'calendar';
              color = focused ? '#E57814' : '#C5C5CD';
              name = focused ? 'Parties' : 'Parties';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble-outline' : 'chatbubble-outline';
              color = focused ? '#E57814' : '#C5C5CD';
              name = focused ? 'Chat' : 'Chat';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
              color = focused ? '#E57814' : '#C5C5CD';
              name = focused ? 'Profile' : 'Profile';
            }

            return (
              <>
                {iconName === 'chatbubble-outline' ? (
                  <Ionic name={iconName} size={25} color={color} />
                ) : (
                  <AntDesign name={iconName} size={25} color={color} />
                )}
                <Text style={{color: color, marginTop: 5}}>{name}</Text>
              </>
            );
          },
        })}>
        <Tab.Screen name="Base" component={Base} />
        <Tab.Screen name="Party" component={Party} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      {splash ? (
        <View style={styles.container}>
          <Image source={require('./src/assets/images/penguin.png')} />
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
            <Stack.Screen name="CreateProfile" component={CreateProfile} />
            <Stack.Screen name="AddFriends" component={AddFriends} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
