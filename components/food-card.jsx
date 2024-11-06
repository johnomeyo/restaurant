import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const FoodCard = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('details')}
            activeOpacity={0.8} // Optional: Change opacity on press
        >
            <View style={styles.iconContainer}>
                <Ionicons name="heart" size={24} color="red" onPress={() => console.log("Heart Pressed")} />
            </View>
            <Image
                source={{ uri: 'https://img.icons8.com/?size=100&id=VOUqpht93WuU&format=png&color=000000' }}
                style={styles.image}
            />
            <Text style={styles.text}>Golden Spicy Chicken</Text>
            <Text style={styles.description}>Indulge in our succulent chicken</Text>
            <View style={styles.pricerow}>
                <Text style={styles.text}>$5.00</Text>
                <Ionicons name="add-circle" size={24} color="green" />
            </View>
        </TouchableOpacity>
    );
};

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

export default FoodCard;
