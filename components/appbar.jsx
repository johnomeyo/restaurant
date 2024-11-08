import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconWrapper = ({ name, size, color }) => (
    <View style={styles.iconBackground}>
        <Ionicons name={name} size={size} color={color} />
    </View>
);

const AppBar = () => {
    return (
        <View style={styles.appbar}>
            <IconWrapper name="search" size={ICON_SIZE} color="grey" />
            <View>
                <Text style={styles.locationText}>Location</Text>
                <Text>Naperville, Illinois</Text>
            </View>
            <IconWrapper name="bookmark-outline" size={ICON_SIZE} color="grey" />
        </View>
    );
};

// Constants
const ICON_SIZE = 25;

// Styles
const styles = StyleSheet.create({
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    locationText: {
        color: 'grey',
        fontSize: 16,
    },
    iconBackground: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
});

export default memo(AppBar);
