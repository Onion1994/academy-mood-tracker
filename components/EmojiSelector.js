import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const emojis = ['😀', '😐', '😞', '😠', '😄'];

const EmojiSelector = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      {emojis.map((emoji) => (
        <TouchableOpacity key={emoji} onPress={() => onSelect(emoji)}>
          <Text style={styles.emoji}>{emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  emoji: {
    fontSize: 40,
  },
});

export default EmojiSelector;