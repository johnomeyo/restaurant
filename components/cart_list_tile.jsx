import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartListTile = () => {
    return (
        <View style={styles.listTile}>
            <View style={styles.imgCont}></View>
            <View style={styles.details}></View>
            <View style={styles.price}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    listTile: {
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    imgCont: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 8
    },
    details: {
        backgroundColor: "green",
        height: 100,
        width: 150,
    },
    price: {
        backgroundColor: "blue",
        height: 100,
        width: 100,
    }
})
export default CartListTile;
