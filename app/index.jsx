import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBar from '../components/appbar';
import OfferCard from '../components/offer_card';
import CategoriesSection from '../components/categories_section';
import RecommedSection from '../components/recommended-section';

const App = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <AppBar></AppBar>
            <OfferCard></OfferCard>
            <CategoriesSection />
            <RecommedSection />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    scaffold: {
        paddingVertical: 20,
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 24,
        paddingTop: 80,
        paddingLeft: 16
    },
    taskList: {
        paddingHorizontal: 16,
    }
});

export default App;
