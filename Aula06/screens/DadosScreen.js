import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DadosScreen({ route }) {
  const { nome, email, telefone } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Cadastrados</Text>
      <Text style={styles.label}>Nome: <Text style={styles.value}>{nome}</Text></Text>
      <Text style={styles.label}>E-mail: <Text style={styles.value}>{email}</Text></Text>
      <Text style={styles.label}>Telefone: <Text style={styles.value}>{telefone}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 24 },
  label: { fontSize: 18, marginBottom: 8 },
  value: { fontWeight: 'bold' }
});