import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Reusable component for nutrition information
const InfoItem = ({ figure, unit }) => (
    <View style={styles.info}>
        <Text style={styles.figures}>{figure}</Text>
        <Text style={styles.units}>{unit}</Text>
    </View>
);

const FoodDetailsSection = () => {
    const handleAddToCart = () => console.log("Added to cart");
    const handleBuyNow = () => console.log("Buying now");

    return (
        <View>
            <Text style={styles.name}>Double Beef Cheese Burger</Text>

            {/* Location Section */}
            <View style={styles.location}>
                <Ionicons
                    name="location"
                    size={17}
                    color="grey"
                    onPress={handleAddToCart}
                    accessible
                    accessibilityLabel="Location Icon"
                />
                <Text style={styles.locationText}>Naperville, Illinois</Text>
            </View>

            {/* Food Information */}
            <View style={styles.foodInfo}>
                <InfoItem figure="198" unit="kcal" />
                <View style={styles.line} />
                <InfoItem figure="25.2" unit="proteins" />
                <View style={styles.line} />
                <InfoItem figure="13.8" unit="fats" />
                <View style={styles.line} />
                <InfoItem figure="23.7" unit="carbo" />
            </View>

            {/* Description Section */}
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>
                Burger with patty filled with macaroni & cheese and real beef, Stroganoff sauce, topped with onions, served on a soft black sesame burger bun
            </Text>

            {/* Buy Section */}
            <View style={styles.buy}>
                <TouchableOpacity style={styles.iconCircle} onPress={handleAddToCart}>
                    <Ionicons name="bag-outline" size={24} color="grey" accessible accessibilityLabel="Add to Cart" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleBuyNow}>
                    <Text style={styles.btnText}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    line: {
        height: '60%',
        backgroundColor: 'grey',
        width: 1,
    },
    location: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    locationText: {
        color: 'grey',
        marginLeft: 10,
        fontSize: 17,
    },
    foodInfo: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginVertical: 10,
        borderRadius: 12,
    },
    description: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: 'grey',
        fontSize: 17,
        marginVertical: 10,
    },
    buy: {
        flexDirection: 'row',
        marginVertical: 10,
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
        marginRight: 20,
    },
    btn: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        width: 200,
        borderRadius: 18,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    figures: {
        fontWeight: '700',
    },
    units: {
        color: 'grey',
    },
});

export default FoodDetailsSection;