import React from 'react';
import { StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import FoodCard from './food-card';

const data = [
    <FoodCard></FoodCard>,
    <FoodCard></FoodCard>,
    <FoodCard></FoodCard>,
    <FoodCard></FoodCard>,
]

const { width } = Dimensions.get('window'); // Get screen width
const itemWidth = width / 2 - 12; // Calculate item width for two columns

const TwoColumnGrid = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <FoodCard style={{ width: itemWidth }} /> // Set width for each card
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2} // Set two columns
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 6,
    },
});

export default TwoColumnGrid;
