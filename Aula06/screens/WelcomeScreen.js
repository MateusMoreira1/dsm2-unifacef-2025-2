import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen({ route }) {
  const { email } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo{email ? `, ${email}` : ''}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 }
});