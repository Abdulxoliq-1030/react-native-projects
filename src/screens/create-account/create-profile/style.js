import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  top: {
    marginTop: 30,
    padding: 20,
  },
  headText: {
    fontSize: 25,
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  descriptText: {
    color: '#9C9CA2',
  },
  avatarWrap: {
    position: 'relative',
    width: 150,
  },

  avatarImg: {
    width: 137,
    height: 137,
    borderRadius: 100,
  },

  closeIcon: {
    position: 'absolute',
    right: 10,
    color: 'white',
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  inputWrap: {
    marginTop: 30,
    width: '100%',
  },
  btnStyle: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F2F2F5',
    marginTop: 10,
    borderRadius: 10,
  },
  btnTextStyle: {
    textAlign: 'left',
    fontSize: 16,
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  dropdownTextStyle: {
    textAlign: 'left',
  },
  datePicker: {
    marginVertical: 10,
    width: '100%',
    borderColor: '#F2F2F5',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
  },
});

export default styles;
