import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Projeto Aula03 Personalizado!</Text>
      <Text style={styles.subtitulo}>Alterando texto e estilos conforme solicitado.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#00796b' },
  subtitulo: { fontSize: 18, color: '#004d40', marginTop: 10 }
});

// npx expo start --web
