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
    padding: 5,
    flex: 1
  },
  cancelButton: {
    backgroundColor: '#191D32',
    borderRadius: 5,
    padding: 4,
    marginHorizontal: 5,
  },
});

export default style;
