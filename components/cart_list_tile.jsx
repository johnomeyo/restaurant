import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CartListTile = ( props) => {
    return (
        <View style={styles.listTile}>
            <Image
                style={styles.image}
                source={{ uri:props.img }} />
            <View style={styles.details}>
                <Text style={styles.category}>{props.color} Color</Text>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>${props.price}</Text>
            </View>
            <View style={styles.items}>
                <TouchableOpacity onPress={() => console.log("Reduced")}>
                    <View style={styles.outline}>
                        <Text>-</Text>
                    </View>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity onPress={() => console.log("Added")}>
                    <View style={styles.outline}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    listTile: {
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 12,
        marginVertical: 8

    },
    imgCont: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 8
    },
    details: {
        height: 100,
        width: 150,
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    items: {
        height: 100,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    outline: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bdbdbd',
    },
    category: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    price: {
        fontWeight: 'bold',
        color: 'grey'
    },
})
export default CartListTile;
