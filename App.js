// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmojiSelector from './components/EmojiSelector';
import Header from './components/Header';

export default function App() {
  const handleEmojiSelect = (emoji) => {
    console.log(`Selected Mood: ${emoji}`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Rate your mood today by selecting an emoji!</Text>
      <EmojiSelector onSelect={handleEmojiSelect} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


