// screens/WelcomeScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000); // 2 seconds delay before moving to login screen

  return (
    <LinearGradient
      colors={['#ffffff', '#000000']}
      style={styles.container}
    >
      <Text style={styles.text}>Welcome To Nameit Homeit</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});
