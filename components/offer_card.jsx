import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from './custom-btn';

const OfferCard = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.freeText}>{"Free Delivery For\nSpaghetti"}</Text>
                <Text style={styles.uptoText}>Upto 3 times a day</Text>
                <CustomButton />
            </View>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=P3AWPy5QyOIa&format=png&color=000000' }}
                style={{ width: 150, height: 150 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 16,
        borderRadius: 10,
        paddingLeft: 16,
        paddingVertical: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    freeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    uptoText: {
        color: 'white',
        marginBottom: 20,
    },
    button: {
        color: 'red',
        maxWidth: 100,
    },
})
export default OfferCard
