import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FoodCard = () => {
    const navigation = useNavigation();

    // Memoize navigation function to avoid unnecessary re-renders
    const navigateToDetails = useCallback(() => navigation.navigate('details'), [navigation]);

    // Memoize heart press function for performance
    const onHeartPress = useCallback(() => console.log("Heart Pressed"), []);

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={navigateToDetails}
            activeOpacity={0.8} // Optional: Change opacity on press
        >
            {/* Heart Icon with press handler */}
            <View style={styles.iconContainer}>
                <Ionicons name="heart" size={24} color="red" onPress={onHeartPress} />
            </View>

            {/* Product Image */}
            <Image
                source={{ uri: 'https://img.icons8.com/?size=100&id=VOUqpht93WuU&format=png&color=000000' }}
                style={styles.image}
            />

            {/* Product Name */}
            <Text style={styles.text}>Golden Spicy Chicken</Text>

            {/* Product Description */}
            <Text style={styles.description}>Indulge in our succulent chicken</Text>

            {/* Price Row with Add Icon */}
            <View style={styles.pricerow}>
                <Text style={styles.text}>$5.00</Text>
                <Ionicons name="add-circle" size={24} color="green" />
            </View>
        </TouchableOpacity>
    );
};

// Define styles outside component to prevent re-creation on each render
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 6,
        flex: 1,
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

export default memo(FoodCard); // Memoize the component to prevent unnecessary re-renders
