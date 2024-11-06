import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, StatusBar } from 'react-native';

const FoodDetailsPage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View><Text style={styles.title}>Hello, Scrollable Safe Area!</Text></View>
                {/* Add more content here if needed */}
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
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default FoodDetailsPage;
