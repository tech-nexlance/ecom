// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, FlatList } from 'react-native';
import Topbar from './components/Topbar';

export default function HomeScreen() {
  const products1 = [
    { id: '1', name: 'Sunpure Refined Sunflower Oil', price: '₹111', discount: '13%', image: require('../assets/product1.jpg') },
    { id: '2', name: 'Nandini Goodlife Toned UHT Milk', price: '₹30', discount: '', image: require('../assets/product1.jpg') },
    { id: '3', name: 'Blueberry Imported', price: '₹258', discount: '31%', image: require('../assets/product1.jpg') },
    { id: '4', name: 'Aashirvaad Atta - Superior MP Whole', price: '₹399', discount: '18%', image: require('../assets/product1.jpg') },
    { id: '5', name: 'Gold Flake Slk Sleeks', price: '₹100', discount: '', image: require('../assets/product1.jpg') },
  ];

  const products2 = [
    { id: '6', name: 'Similac Advance Stage 2', price: '₹600', discount: '', image: require('../assets/product1.jpg') },
    { id: '7', name: 'Amul Butter 500g', price: '₹250', discount: '', image: require('../assets/product1.jpg') },
    { id: '8', name: 'Broccoli Fresh', price: '₹150', discount: '10%', image: require('../assets/product1.jpg') },
    { id: '9', name: 'Oreo Biscuits', price: '₹30', discount: '', image: require('../assets/product1.jpg') },
    { id: '10', name: 'Banana Premium', price: '₹50', discount: '', image: require('../assets/product1.jpg') },
  ];

  const products3 = [
    { id: '11', name: 'Dairy Milk Silk', price: '₹70', discount: '', image: require('../assets/product1.jpg') },
    { id: '12', name: 'Lay’s Potato Chips', price: '₹20', discount: '5%', image: require('../assets/product1.jpg') },
    { id: '13', name: 'Coca-Cola Can 330ml', price: '₹40', discount: '', image: require('../assets/product1.jpg') },
    { id: '14', name: 'Maggi Noodles 12-pack', price: '₹180', discount: '10%', image: require('../assets/product1.jpg') },
    { id: '15', name: 'Eggs 12-pack', price: '₹70', discount: '', image: require('../assets/product1.jpg') },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar - Fixed */}
      <Topbar />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Address Bar (Scrolls with Content) */}
        <View style={styles.header}>
          <Text style={styles.blockedArea}>Area is blocked</Text>
          <Text style={styles.address}>Ashok Nagar - KG Halli, D' Souza Layout</Text>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>LOWEST PRICES</Text>
          <Text style={styles.bannerSubText}>₹50 Free cash in your wallet</Text>
        </View>

        {/* Product Section 1 */}
        <Text style={styles.sectionTitle}>Trending in Richmond Town</Text>
        <FlatList
          horizontal
          data={products1}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              {item.discount !== '' && <Text style={styles.productDiscount}>{item.discount} Off</Text>}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Product Section 2 */}
        <Text style={styles.sectionTitle}>Best Sellers</Text>
        <FlatList
          horizontal
          data={products2}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              {item.discount !== '' && <Text style={styles.productDiscount}>{item.discount} Off</Text>}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        {/* Product Section 3 */}
        <Text style={styles.sectionTitle}>Daily Essentials</Text>
        <FlatList
          horizontal
          data={products3}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              {item.discount !== '' && <Text style={styles.productDiscount}>{item.discount} Off</Text>}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,  // Adjust for status bar
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
  },
  scrollView: {
    paddingTop: 120,  // Adjust to account for the fixed search bar
    paddingBottom: 20,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  blockedArea: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
  banner: {
    backgroundColor: '#ffdd59',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff3d00',
  },
  bannerSubText: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productDiscount: {
    fontSize: 12,
    color: 'red',
  },
});
