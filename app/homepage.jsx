import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import AppBar from '../components/appbar.jsx'
import OfferCard from '../components/offer_card.jsx'
import CategoriesSection from '../components/categories_section.jsx'
import RecommendedSection from '../components/recommended-section.jsx'
import CategorySelector from '../components/CategorySelector.jsx';
import ItemCard from '../components/ItemCard.jsx';

const Homepage = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <AppBar />
                <OfferCard />
                <CategorySelector />
                <ScrollView horizontal contentContainerStyle={styles.scrollAxis}>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollAxis: {
        marginHorizontal: 16,
        marginVertical: 10
    },
    container: {
        flexGrow: 1,
        paddingVertical: 20, // Padding for content inside the ScrollView
    },
});

export default Homepage;
