import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetalhesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});
