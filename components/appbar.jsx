import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const AppBar = () => {
    return (
        <View style={styles.appbar}>
           <View style={styles.iconBackground}>
           <Ionicons name="search" size={25} color="grey" />
           </View>
            <View style={styles.title}>
                <Text style={styles.locationText}>Location</Text>
                <Text>Napville, Illinois</Text>
            </View>
            <View style={styles.iconBackground}>
           <Ionicons name="bookmark-outline" size={25} color="grey" />
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        // paddingTop: 20,
    },
    title: {

    },
    locationText: {
        color: 'grey',
        fontSize: 16,
    },
    iconBackground:{
        backgroundColor:'white',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
    }
})
export default AppBar
