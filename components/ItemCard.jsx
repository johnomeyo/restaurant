import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomBtn'
const ItemCard = () => {
    const navigation = useNavigation();

    const navigateToDetails = () => navigation.navigate('details')

    return (
        <TouchableOpacity onPress={navigateToDetails} activeOpacity={0.8}>
            <View style={styles.card}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=CnSNqm9PSk6K&format=png&color=000000' }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}> Aalto Chair</Text>
                <View style={styles.addToCart}>
                    <Text style={styles.price}>$39</Text>
                    <CustomButton title="Add to cart" />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#eae4d8',
        height: 350,
        width: 250,
        borderRadius: 16,
        marginRight:20
    },
    imgContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150
    },
    text: {
        marginLeft: 16,
        fontWeight: '600',
        color: 'grey',
        fontSize: 20
    },
    addToCart: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 12,
        justifyContent:'space-between'
    },
    price: {
        fontWeight: '600',
        fontSize: 20,
        marginTop:8
    }
})
export default ItemCard
