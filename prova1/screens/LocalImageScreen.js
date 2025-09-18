import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LocalImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/local-image.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 300 }
});