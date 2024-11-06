import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Task(props) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2, // For Android shadow
    },
    taskTitle: {
        color: 'black',
        fontSize: 16,
    }
});

export default Task;
