import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

const ProductGrid = ({ navigation }) => { // Receive navigation prop
  const [cart, setCart] = useState({});

  const handleAddClick = (productId) => {
    console.log(`Add button clicked for product ${productId}`);
    setCart({ ...cart, [productId]: 1 });
  };

  const handleIncrease = (productId) => {
    console.log(`Increase quantity for product ${productId}`);
    setCart({ ...cart, [productId]: (cart[productId] || 1) + 1 });
  };

  const handleDecrease = (productId) => {
    console.log(`Decrease quantity for product ${productId}`);
    const newQuantity = (cart[productId] || 1) - 1;
    if (newQuantity <= 0) {
      const updatedCart = { ...cart };
      delete updatedCart[productId];
      setCart(updatedCart);
    } else {
      setCart({ ...cart, [productId]: newQuantity });
    }
  };

  const handleImageClick = (productId) => {
    navigation.navigate('ProductDescription', { productId });
  };

  const products = [
    { id: 1, name: 'Product 1', originalPrice: 2000, discountedPrice: 1500 },
    { id: 2, name: 'Product 2', originalPrice: 2000, discountedPrice: 1500 },
    { id: 3, name: 'Product 3', originalPrice: 2000, discountedPrice: 1500 },
    { id: 4, name: 'Product 4', originalPrice: 2000, discountedPrice: 1500 },
    { id: 5, name: 'Product 5', originalPrice: 2000, discountedPrice: 1500 },
    { id: 6, name: 'Product 6', originalPrice: 2000, discountedPrice: 1500 },
    { id: 7, name: 'Product 7', originalPrice: 2000, discountedPrice: 1500 },
    { id: 8, name: 'Product 8', originalPrice: 2000, discountedPrice: 1500 },
    { id: 9, name: 'Product 9', originalPrice: 2000, discountedPrice: 1500 },
    { id: 10, name: 'Product 10', originalPrice: 2000, discountedPrice: 1500 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View style={styles.productCardContainer} key={product.id}>
            <Card style={styles.productCard}>
              <TouchableOpacity onPress={() => handleImageClick(product.id)}>
                <Card.Cover
                  source={{ uri: 'https://via.placeholder.com/300x200' }}
                  style={styles.productImage}
                />
              </TouchableOpacity>
              <Card.Content>
                <Title style={styles.productTitle}>{product.name}</Title>
                <View style={styles.priceRow}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
                    <Text style={styles.discountedPrice}>₹{product.discountedPrice}</Text>
                  </View>
                  {cart[product.id] ? (
                    <View style={styles.quantityControl}>
                      <TouchableOpacity onPress={() => handleDecrease(product.id)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{cart[product.id]}</Text>
                      <TouchableOpacity onPress={() => handleIncrease(product.id)} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Button
                      mode="outlined"
                      style={styles.addButton}
                      contentStyle={styles.addButtonContent}
                      labelStyle={styles.addButtonLabel}
                      onPress={() => handleAddClick(product.id)}
                    >
                      Add
                    </Button>
                  )}
                </View>
              </Card.Content>
            </Card>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCardContainer: {
    width: '50%',
    marginBottom: 15,
  },
  productCard: {
    flex: 1,
    marginHorizontal: 5,
  },
  productTitle: {
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 0,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  addButtonContent: {
    height: 30,
  },
  addButtonLabel: {
    fontSize: 15,
    marginTop: 4,
  },
  productImage: {
    height: 150,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default ProductGrid;
