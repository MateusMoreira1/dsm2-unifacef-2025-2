import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header fixo no topo com 'Início' no canto esquerdo */}
      <View style={styles.topBar}>
        <Text style={styles.inicio}>Início</Text>
      </View>

      {/* conteúdo principal centralizado */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>Agenda do dia</Text>
        <Text style={styles.sub}>Mateus dos Santos Moreira</Text>
        <Text style={styles.sub}>Engenharia de Software 6ºSemestre</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Meus')}>
        <Text style={styles.btnText}>Meus compromissos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Equipe')}>
        <Text style={styles.btnText}>Compromissos da equipe</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  topBar: { width: '100%', alignItems: 'flex-start', marginBottom: 6 },
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  title: { fontSize: 32, marginBottom: 10 },
  inicio: { fontSize: 16, fontWeight: '600', paddingLeft: 2 },
  sub: { fontSize: 16 },
  btn: { marginTop: 25, padding: 15, backgroundColor: '#ccc', width: 230, alignItems: 'center' },
  btnText: { fontSize: 14 }
});
