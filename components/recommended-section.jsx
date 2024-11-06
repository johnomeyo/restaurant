import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import FoodCard from './food-card';
import TwoColumnGrid from './two-column-grid';
const RecommedSection = () => {
    return (
        <View style={styles.recommedSection}>
            <View style={styles.titleContainer}>
                <Text style={styles.recommendedText}>Recommended for you</Text>
                <Text style={styles.seeMore}>See more</Text>
            </View>
            <TwoColumnGrid/>
        </View>
    )
}
const styles = StyleSheet.create({
    recommedSection: {
        marginHorizontal: 16,
        marginVertical: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    seeMore: {
        textDecorationLine: 'underline',
        color: 'grey'
    },
    recommendedText: {
        fontWeight: 'bold'
    },
    grid: {

    },
})
export default RecommedSection
