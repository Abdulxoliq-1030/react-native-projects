import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dedede',
    paddingVertical: 45,
    paddingHorizontal: 10,
  },

  weekText: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  namesWrap: {
    flexDirection: 'row',
    paddingVertical: 10,
  },

  touchableImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },

  touchableImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },

  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },

  followBtnWrap: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImageWrap: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  suggestionTitle: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },

  suggestionWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '64%',
  },

  suggestionImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  textWrapper: {
    width: '100%',
  },
});

export default styles;
