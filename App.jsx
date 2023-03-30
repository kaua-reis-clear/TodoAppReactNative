import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List } from './src/components'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191D32',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
});
