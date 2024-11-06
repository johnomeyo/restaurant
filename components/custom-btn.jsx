import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButton(props) {
  const { onPress, title = 'Order Now' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: 'green',
    maxWidth:100,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});