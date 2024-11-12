import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import ColorSelector from '../components/ColorSelector';
import AddToCartSection from '../components/AddToCart';

const ItemDetailsPage = () => {
    return (
        <View style={styles.scaffold}>
            <View style={styles.imgContainer}>
                <Image 
                    source={{ uri: 'https://img.icons8.com/?size=100&id=64409&format=png&color=000000' }}
                    style={styles.image}
                    resizeMode="contain"  // Ensures the entire image fits within the container
                />
            </View>
            <View style={styles.detailsSection}>
                <View>
                    <Text style={styles.title}>Ditzel Lounge Chair</Text>
                    <Text style={styles.subtitle}>Lacquered oak</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>$45</Text>
                </View>
            </View>
            <Text style={styles.description}>
                We gave the Sophie chair a cushy curved back, thick cushions, and an ultra-smooth swivel, so you can go from cocktails to movie marathons with ease and style.
            </Text>
            <ColorSelector colors={['#C0C0C0', '#008080', '#FFD700']} />
            <AddToCartSection />
        </View>
    )
}

const styles = StyleSheet.create({
    scaffold: {
        margin: 16,
    },
    imgContainer: {
        height: 450,
        backgroundColor: '#eae4d8',
        borderRadius: 12,
        justifyContent: 'center',    // Center the image vertically
        alignItems: 'center',        // Center the image horizontally
    },
    image: {
        width: '50%',               // Image takes full width of the container
        height: '100%',              // Image takes full height of the container
    },
    detailsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
    },
    subtitle: {
        color: 'grey',
        fontSize: 19,
    },
    price: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        color: 'grey',
        fontSize: 18,
        marginVertical: 16,
    },
    priceText: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default ItemDetailsPage;
