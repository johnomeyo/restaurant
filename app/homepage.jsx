import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import AppBar from '../components/appbar.jsx'
import OfferCard from '../components/offer_card.jsx'
import CategoriesSection from '../components/categories_section.jsx'
import RecommendedSection from '../components/recommended-section.jsx'

const Homepage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <AppBar />
                <OfferCard />
                <CategoriesSection />
                < RecommendedSection />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,

    },
    container: {
        flexGrow: 1,
        paddingVertical: 20, // Padding for content inside the ScrollView
    },
});

export default Homepage;
