import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const CustomBtn = () => {
    return (
        <TouchableOpacity style={styles.btn}>
            <View>
                <Text style={styles.btnText}>Check Out</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'black',
        height: 50,
        marginHorizontal: 16,
        borderRadius: 12,
        marginVertical:20,
        justifyContent:'center',
        alignItems:'center',
        position:'static'
    },
    btnText:{
        color:'white',
        fontWeight:'bold'
    }
})
export default CustomBtn
