import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorSelector = ({ colors = [] }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Color</Text>
            <View style={styles.colorOptions}>
                {colors.map((color, index) => (
                    <View
                        key={index}
                        style={[styles.colorCircle, { backgroundColor: color }]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:20
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
        marginRight: 10,
    },
    colorOptions: {
        flexDirection: 'row',
    },
    colorCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    
});

export default ColorSelector;
