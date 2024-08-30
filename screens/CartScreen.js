import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };

export default function CartScreen() {
  return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>This</Text>
      <Text style={styles.text}>is cart</Text>
      <Text style={styles.text}>screen</Text>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
