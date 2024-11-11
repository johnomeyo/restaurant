import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CartListTile from '../components/cart_list_tile'


const CartPage = () => {


    return (
        <View>
            <Text style={styles.title}>Cart Page</Text>
            <CartListTile name="Wooden" img='https://img.icons8.com/?size=100&id=kLCDEKFEmsPz&format=png&color=000000' color="Golden" price="450" />
            <CartListTile name="Bakley" img='https://img.icons8.com/?size=100&id=108242&format=png&color=000000' color="Black" price="200" />
            <CartListTile name="Rocking" img='https://img.icons8.com/?size=100&id=7USAgXD1WqTc&format=png&color=000000' color="Blue" price="200" />

        </View>
    )

}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})
export default CartPage
