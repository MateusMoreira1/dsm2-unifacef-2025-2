import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function MeusScreen({ navigation }) {
  const compromissos = [
    { id: '1', hora: '09:30', evento: 'Reunião "Daily"' },
    { id: '2', hora: '14:00', evento: 'Reunião com cliente Carros & Carros' },
    { id: '3', hora: '16:30', evento: 'Prazo final Projeto X' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Meus compromissos</Text>
      </View>

      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 0 }}
        ListHeaderComponent={() => (
          <View style={styles.headerInfo}>
            <Text style={styles.data}>(Eu)</Text>
            <Text style={styles.sub}>Mateus dos Santos Moreira</Text>
            <Text style={styles.sub}>Engenharia de Software 6ºSemestre</Text>
          </View>
        )}
        ListEmptyComponent={() => <Text style={styles.empty}>Sem compromissos</Text>}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora} | {item.evento}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  voltar: { fontSize: 22 },
  title: { fontSize: 22, marginLeft: 12, marginBottom: 10 },
  data: { fontSize: 26, marginBottom: 5, textAlign: 'center' },
  sub: { fontSize: 14, textAlign: 'center' },
  headerInfo: { marginTop: 6, alignItems: 'center' },
  item: { fontSize: 16, marginBottom: 10, color: '#111' }
  ,
  empty: { fontSize: 16, fontStyle: 'italic', color: '#666', marginTop: 20 }
});
