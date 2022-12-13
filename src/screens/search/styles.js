import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  plus: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  zImage: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
  },

  viewStory: {
    position: 'absolute',
    top: windowHeight / 6,
    left: windowWidth / 18,
    backgroundColor: '#fff',
    width: 350,
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    elevation: 50,
  },

  storyStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  storyFooter: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});

export default styles;
