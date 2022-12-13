import {
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SearchBox, SearchContent} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity style={styles.plus}>
          <AntDesign name="pluscircleo" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View style={styles.zImage}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View style={styles.viewStory}>
            <View style={styles.storyStyles}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymus_guy
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View style={styles.storyFooter}>
              <IonicIcons name="ios-heart-outline" style={{fontSize: 26}} />
              <IonicIcons
                name="ios-person-circle-outline"
                style={{fontSize: 26}}
              />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
