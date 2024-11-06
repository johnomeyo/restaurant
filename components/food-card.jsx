import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FoodCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Ionicons name="heart" size={24} color="red" />
            </View>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=VOUqpht93WuU&format=png&color=000000' }}
                style={styles.image} />
            <Text style={styles.text}>Golden Spicy Chicken</Text>
            <Text style={styles.description}>Indulge in our succulent chicken</Text>
            <View style={styles.pricerow}>
                <Text style={styles.text}>$5.00</Text>
                <Ionicons name="add-circle" size={24} color="green" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 6,
        flex: 1, // Ensures each card takes full width of its container in a two-column layout
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    description: {
        color: "grey",
    },
    text: {
        fontWeight: '700',
    },
    iconContainer: {
        alignItems: 'flex-end',
    },
    pricerow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default FoodCard;
