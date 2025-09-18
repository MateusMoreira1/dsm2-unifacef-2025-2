// src/screens/IconsScreen.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function IconsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="home" size={60} color="red" />
        <MaterialIcons name="favorite" size={60} color="blue" />
        <FontAwesome name="star" size={60} color="green" />
      </View>
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', gap:20 },
  row: { flexDirection:'row', justifyContent:'space-around', width:'80%' }
});
