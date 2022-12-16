import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Onboarding} from './src/screens';

const App = () => {
  const [splash, setSplash] = useState(true);

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
        <Onboarding />
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
