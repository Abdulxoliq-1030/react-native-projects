//import liraries
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import styles from './style';
import {FlatText, Button} from '../../../components';

const Onboarding = () => {
  const data = [
    {
      image: require('../../../assets/images/onboarding/image-1.png'),
      headingText: 'Explore Parties',
      description:
        'Find and explore parties in your area,join and meet new friends',
    },
    {
      image: require('../../../assets/images/onboarding/image-2.png'),
      headingText: 'Create Parties',
      description:
        'Create your own parties, make it private or public, control who’s joining',
    },
    {
      image: require('../../../assets/images/onboarding/image-3.png'),
      headingText: 'Add Friends',
      description:
        'Add current friends from your contacts or use a QR code when you meet other Streakers in person. ',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <SwiperFlatList
          index={2}
          showPagination
          paginationDefaultColor="#DDDDE3"
          paginationStyleItem={styles.dot}
          paginationStyleItemActive={styles.activeDot}
          data={data}
          renderItem={({item}) => (
            <View style={styles.flatWrapper}>
              <View style={[childStyle.child]}>
                <Image style={styles.image} source={item.image} />
              </View>
              <FlatText
                headingText={item.headingText}
                description={item.description}
              />
            </View>
          )}
        />
      </View>
      <Button text="Get Started" />
    </View>
  );
};

const {width} = Dimensions.get('window');
// define your styles
const childStyle = StyleSheet.create({
  child: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Onboarding;
