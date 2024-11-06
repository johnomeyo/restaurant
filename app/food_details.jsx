import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image, StatusBar } from 'react-native';
import AppBar from '../components/appbar';
import FoodDetailsSection from '../components/food_details_section';

const FoodDetailsPage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <AppBar />
                <Image
                    source={{ uri: 'https://img.icons8.com/?size=100&id=VOUqpht93WuU&format=png&color=000000' }}
                    style={styles.image}
                />
                <FoodDetailsSection/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0, // Extra padding for Android
    },
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        marginVertical: 40,
        height: 200,
        alignSelf: 'center',
    },
});

export default FoodDetailsPage;
