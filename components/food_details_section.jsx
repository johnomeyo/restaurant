import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FoodDetailsSection = () => {
    return (
        <View>
            <Text style={styles.name}>Double Beef Cheese Burger</Text>
            <View style={styles.location}>
                <Ionicons name="location" size={17} color="grey" onPress={() => console.log("Added to cart")} />
                <Text style={styles.locationText}>Naperville, Illinois</Text>
            </View>
            <View style={styles.foodInfo}>
                <View style={styles.info}>
                    <Text style={styles.figures}>198</Text>
                    <Text style={styles.units}>kcal</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.info}>
                    <Text style={styles.figures}>25.2</Text>
                    <Text style={styles.units}>proteins</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.info}>
                    <Text style={styles.figures}>13.8</Text>
                    <Text style={styles.units}>fats</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.info}>
                    <Text style={styles.figures}>23.7</Text>
                    <Text style={styles.units}>carbo</Text>
                </View>
            </View>

            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>Burger with patty filled with macaroni & cheese and real beef, Stroganoff sauce, topped with onions, served on a soft black sesame burger bun</Text>

            <View style={styles.buy}>
                <View style={styles.iconCircle}>
                    <Ionicons name="bag-outline" size={24} color="grey" onPress={() => console.log("Heart Pressed")} />
                </View>
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
    line: {
        height: '60%', backgroundColor: 'grey', // Line color
        width: 1,
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
    foodInfo: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginVertical: 10,
        borderRadius: 12
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
    },
    figures: {
        fontWeight: '700',
    },
    units: {
        color: 'grey'
    }
});

export default FoodDetailsSection
