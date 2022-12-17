import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddFriends} from './src/screens';
import {CreateProfile, Login, Onboarding} from './src/screens/create-account';
import VerifyPhone from './src/screens/create-account/login/verify-phone';

const App = () => {
  const [splash, setSplash] = useState(true);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);

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
