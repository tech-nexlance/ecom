import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function CategoriesScreen() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.error }}>This is the Categories Screen</Text>
      {/* Add your categories UI here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
