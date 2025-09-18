// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Nome Completo</Text>
      <Button title="Ir para Tela 2 (Imagem da Internet)" onPress={() => navigation.navigate('InternetImage')} />
      <Button title="Ir para Tela 3 (Imagem Local)" onPress={() => navigation.navigate('LocalImage')} />
      <Button title="Ir para Tela 4 (Ícones)" onPress={() => navigation.navigate('Icons')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', gap:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 }
});
