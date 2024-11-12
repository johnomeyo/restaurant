import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const categories = ['All', 'Chairs', 'Tables', 'Sofas', 'Wardrobes'];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handlePress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button,
              selectedCategory === item && styles.activeButton,
            ]}
            onPress={() => handlePress(item)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedCategory === item && styles.activeButtonText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 15
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#333', // Dark background for selected button
  },
  buttonText: {
    color: '#333',
    fontSize: 20,
  },
  activeButtonText: {
    color: '#fff', // White text for selected button
  },
});

export default CategorySelector;
