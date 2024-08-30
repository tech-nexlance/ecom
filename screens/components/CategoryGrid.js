import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';

const CategoryGrid = () => {
  const categories = ['Electronics', 'Fashion', 'Home', 'Books', 'Toys'];

  return (
    <View style={styles.container}>
      {/* Category Heading */}
      <Text style={styles.heading}>Categories</Text>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <Card key={index} style={styles.categoryCard}>
            <Card.Cover source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
            <Card.Content>
              <Title style={styles.categoryTitle}>{category}</Title>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryCard: {
    width: 120,
    marginRight: 10,
  },
  categoryImage: {
    height: 80,
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
  },
});

export default CategoryGrid;
