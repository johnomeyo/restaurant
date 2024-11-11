import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CartListTile from '../components/cart_list_tile'


const CartPage = () => {


    return (
        <View>
            <Text style={styles.title}>Cart Page</Text>
            <CartListTile/>
        </View>
    )

}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:20,
    }
})
export default CartPage
