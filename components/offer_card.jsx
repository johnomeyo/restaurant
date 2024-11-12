import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const OfferCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.freeText}>{"20% OFF"}</Text>
                <Text style={styles.uptoText}>Until 24 Dec</Text>
            </View>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=CnSNqm9PSk6K&format=png&color=000000' }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150
    },
    container: {
        marginVertical: 35,
        marginHorizontal: 16,
        borderRadius: 10,
        paddingLeft: 26,
        paddingVertical: 20,
        backgroundColor: '#bbe2dd',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    freeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'

    },
    uptoText: {

        marginBottom: 20,
    },
    button: {
        color: 'red',
        maxWidth: 100,
    },
})
export default OfferCard
