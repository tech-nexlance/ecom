import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import TopBar from './components/TopBar';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/600x200' }}
          style={styles.banner}
          resizeMode="cover"
        />
        <CategoryGrid />
        <ProductGrid navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingTop:0,
  },
  banner: {
    height: 150,
    width: '100%',
    marginTop: 0,
  },
});

export default HomeScreen;
