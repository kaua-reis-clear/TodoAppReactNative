import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List } from './src/components';
import { Input } from './src/components';
import { TodoProvider } from './src/components/context/TodoContext';

export default function App() {
  return (
    <TodoProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Input />
        <List />
      </View>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191D32',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
