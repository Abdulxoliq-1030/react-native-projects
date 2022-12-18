import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddFriends} from './src/screens';
import Ionic from 'react-native-vector-icons/Ionicons';
import {CreateProfile, Login, Onboarding} from './src/screens/create-account';
import VerifyPhone from './src/screens/create-account/login/verify-phone';
import {Base} from './src/screens/home';
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
            height: 80,
          },
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Base') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={Base} />
        <Tab.Screen name="Onboarding" component={Onboarding} />
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
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
            <Stack.Screen name="CreateProfile" component={CreateProfile} />
            <Stack.Screen name="AddFriends" component={AddFriends} />
            <Stack.Screen name="Base" component={Base} />
            <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
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

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import {Activity, Home, Profile, Reels, Search} from './src/screens';
// import {EditProfile, FriendProfile, Status} from './src/components';

// const App = () => {
//   const Stack = createNativeStackNavigator();

//   const Tab = createBottomTabNavigator();

//   const BottomTabScreen = () => {
//     return (
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarHideOnKeyboard: true,
//           tabBarShowLabel: false,
//           headerShown: false,
//           tabBarStyle: {
//             height: 80,
//           },
//           tabBarIcon: ({focused, size, colour}) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home-sharp' : 'home-outline';
//               size = focused ? size + 8 : size + 2;
//             } else if (route.name === 'Search') {
//               iconName = focused ? 'search' : 'ios-search-outline';
//             } else if (route.name === 'Reels') {
//               iconName = focused
//                 ? 'caret-forward-circle'
//                 : 'caret-forward-circle-outline';
//             } else if (route.name === 'Activity') {
//               iconName = focused ? 'ios-heart' : 'ios-heart-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
//             }

//             return <Ionic name={iconName} size={size} color={colour} />;
//           },
//         })}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="Reels" component={Reels} />
//         <Tab.Screen name="Activity" component={Activity} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     );
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
//         <Stack.Screen name="Status" component={Status} />
//         <Stack.Screen name="FriendProfile" component={FriendProfile} />
//         <Tab.Screen name="EditProfile" component={EditProfile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
