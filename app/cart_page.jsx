import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CartListTile from '../components/cart_list_tile'
import CustomBtn from '../components/CustomBtn'


const CartPage = () => {


    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Cart Page</Text>
                <CartListTile name="Wooden" img='https://img.icons8.com/?size=100&id=kLCDEKFEmsPz&format=png&color=000000' color="Brown" price="450" />
                <CartListTile name="Bakley" img='https://img.icons8.com/?size=100&id=108242&format=png&color=000000' color="Black" price="200" />
                <CartListTile name="Rocking" img='https://img.icons8.com/?size=100&id=7USAgXD1WqTc&format=png&color=000000' color="Blue" price="200" />
                <CartListTile name="Rocking" img='https://img.icons8.com/?size=100&id=9zdKyPeWFLi6&format=png&color=000000' color="Green" price="200" />               
                <CustomBtn />
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    }
})
export default CartPage
