import { View, Text, StyleSheet, Button, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={40} color="blue" />
      <Text style={styles.texto}>Página Inicial</Text>
      <FontAwesome name="star" size={30} color="gold" style={{ margin: 10 }} />
      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
      <Button
        title="Abrir Galeria"
        onPress={() => navigation.navigate('Galeria')}
        color="#1976d2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 16 },
  texto: { fontSize: 20, marginTop: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});