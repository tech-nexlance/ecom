// ProductDescription.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDescription = ({ route }) => {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Description for ID: {productId}</Text>
      {/* Add more details about the product here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDescription;
