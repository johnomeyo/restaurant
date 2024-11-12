import React, { memo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import AppBar from '../components/appbar.jsx';
import OfferCard from '../components/offer_card.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import ItemCard from '../components/ItemCard.jsx';

const Homepage = () => {
    // Sample data to use with FlatList for items
    const itemData = [
        { id: '1', image: 'https://img.icons8.com/?size=100&id=CnSNqm9PSk6K&format=png&color=000000', title: 'Aalto Armchair', price: 39 },
        { id: '2', image: 'https://img.icons8.com/?size=100&id=64108&format=png&color=000000', title: 'Balcony Lounge', price: 78 },
        { id: '3', image: 'https://img.icons8.com/?size=100&id=CnSNqm9PSk6K&format=png&color=000000', title: 'Aalto Armchair', price: 39 },
        { id: '4', image: 'https://img.icons8.com/?size=100&id=64108&format=png&color=000000', title: 'Balcony Lounge', price: 78 },
    ];

    const renderItem = ({ item }) => (
        <ItemCard image={item.image} title={item.title} price={item.price} />
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <AppBar />
                <OfferCard />
                <CategorySelector />
                
                {/* Using FlatList for better performance in horizontal scroll */}
                <FlatList
                    data={itemData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={styles.scrollAxis}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

// Using memo to prevent re-rendering if props haven't changed
export default memo(Homepage);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollAxis: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    container: {
        flexGrow: 1,
        paddingVertical: 20,
    },
});
