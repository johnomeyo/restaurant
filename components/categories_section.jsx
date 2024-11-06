import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const categories = [
    { id: '1', title: 'Burger', uri: 'https://img.icons8.com/?size=100&id=12869&format=png&color=000000' },
    { id: '2', title: 'Drink', uri: 'https://img.icons8.com/?size=100&id=35903&format=png&color=000000' },
    { id: '3', title: 'Chicken', uri: 'https://img.icons8.com/?size=100&id=qriaPog5dGVh&format=png&color=000000' },
    { id: '4', title: 'Fries', uri: 'https://img.icons8.com/?size=100&id=pzqFvSJfEXdD&format=png&color=000000' },
];

const CategoriesSection = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            {categories.map((category) => (
                <View key={category.id} style={styles.imgContainer}>
                    <Image
                        source={{ uri: category.uri }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{category.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 16,
        height: 100,
    },
    imgContainer: {
        backgroundColor: 'white',
        borderRadius: 6,
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: 'column',
        marginRight: 10,
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        color: 'grey',
        marginTop: 8,
    },
});

export default CategoriesSection;
