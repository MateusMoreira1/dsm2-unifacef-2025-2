import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

export default function InternetImage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.image}
        resizeMode="cover"
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4e54c8', justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 200, borderRadius: 10, marginBottom: 24 }
});