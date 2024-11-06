import React from 'react'
import { ScrollView, Text, StyleSheet, View, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FoodDetailsSection = () => {
    return (
        <View>
            <Text style={styles.name}>Double Beef Cheese Burger</Text>
            <View style={styles.location}>
                <Ionicons name="location" size={17} color="grey" onPress={() => console.log("Heart Pressed")} />
                <Text style={styles.locationText}>Naperville, Illinois</Text>
            </View>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>Burger with patty filled with macaroni $ cheese and real beef, Stroganoff sauce, topped with onions, served on a soft black sesame burger bun</Text>

            <View style={styles.buy}>
                <View style={styles.iconCircle}>
                    <Ionicons name="bag-outline" size={24} color="grey" onPress={() => console.log("Heart Pressed")} />
                </View>
                {/* <Button title='Buy Now' color="green" ></Button> */}
                <View style={styles.btn}>
                    <Text style={styles.btnText}>BUY NOW</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    location: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    locationText: {
        color: 'grey',
        marginLeft: 10,
        fontSize: 17,
    },
    description: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: 'grey',
        fontSize: 17,
        marginVertical: 10
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    buy: {
        flexDirection: "row", marginVertical: 10
    },
    iconCircle: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#bdbdbd',
        marginRight: 20,
    },
    btnText: {
        color: 'white'
    },
    btn: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'green',
        alignItems: 'center',
        width: 200,
        borderRadius: 18
    }
});

export default FoodDetailsSection
