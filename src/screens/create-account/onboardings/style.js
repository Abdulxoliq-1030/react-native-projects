import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  flatList: {
    marginBottom: 150,
  },

  flatWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    marginTop: 70,
    width: 8,
    height: 8,
  },

  activeDot: {
    backgroundColor: '#E57814',
    width: 10,
    height: 10,
  },

  image: {
    height: 223,
    resizeMode: 'contain',
    width: '100%',
  },
});

export default styles;
