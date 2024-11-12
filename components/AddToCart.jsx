import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from './CustomBtn';
import { useNavigation } from '@react-navigation/native';
const AddToCartSection = () => {
    const navigation = useNavigation();

    // Memoize navigation function to avoid unnecessary re-renders
    const handleAddToCart = () => navigation.navigate('cartpage');

    return (
        <View style={styles.container}>
            <CustomButton title="Add to Cart" onPress={handleAddToCart} color="black" />
            <TouchableOpacity style={styles.iconCircle} onPress={handleAddToCart}>
                <Ionicons name="cart-outline" size={24} color="grey" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    iconCircle: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        marginLeft: 10,
    },
});

export default AddToCartSection;
