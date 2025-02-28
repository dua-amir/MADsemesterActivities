import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Dua, Congratulations your first app is running successfully!</Text>
      <Header>Heyyyyyyyyyy</Header>
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
