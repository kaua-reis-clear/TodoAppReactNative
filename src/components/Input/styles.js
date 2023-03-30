import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  inputArea: {
    backgroundColor: '#F2E9E4',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
  input: {
    fontSize: 17,
  },
});

export default style;
