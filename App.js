import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Header } from './components/Header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header name = 'top component'></Header>
      <Text>Hello Dua, Congratulations your first app is running successfully!</Text>
      <Header name = 'bottom component'></Header>
      <TextInput placeholder='typing....'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
