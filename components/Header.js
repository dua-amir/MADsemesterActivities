import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Hello Dua, it's your Header file!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: yellow ,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });