import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native';

export default function EquipeScreen({ navigation }) {
  const dados = [
    {
      nome: '(Eu)',
      data: [
        { id: '1', hora: '09:30', evento: 'Reunião "Daily"' },
        { id: '2', hora: '14:00', evento: 'Reunião com cliente Carros & Carros' },
        { id: '3', hora: '16:30', evento: 'Prazo final Projeto X' }
      ]
    },
    {
      nome: 'Jurema (chefe)',
      data: [
        { id: '4', hora: '09:30', evento: 'Reunião "Daily"' },
        { id: '5', hora: '12:00', evento: 'Almoço com a diretoria' },
        { id: '6', hora: '15:00', evento: 'Saída viagem' }
      ]
    },
    {
      nome: 'Aderbal',
      data: [
        { id: '7', hora: '09:30', evento: 'Reunião "Daily"' },
        { id: '8', hora: '13:30', evento: 'Visita técnica Uni-FACEF' },
        { id: '9', hora: '16:30', evento: 'Prazo final Projeto X' }
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Compromissos da equipe</Text>
      </View>
      

      <SectionList
        contentContainerStyle={{ paddingTop: 8 }}
        ListHeaderComponent={() => (
          <View style={styles.headerInfo}>
            <Text style={styles.sub}>Mateus dos Santos Moreira</Text>
            <Text style={styles.sub}>Engenharia de Software 6ºSemestre</Text>
          </View>
        )}
        ListEmptyComponent={() => <Text style={styles.empty}>Sem compromissos na equipe</Text>}
        sections={dados}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 25 }}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.hora} | {item.evento}</Text>
        )}
        renderSectionHeader={({ section: { nome } }) => (
          <Text style={styles.nome}>{nome}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  voltar: { fontSize: 22 },
  title: { fontSize: 22, marginLeft: 12, marginBottom: 6 },
  sub: { fontSize: 14 },
  nome: { fontSize: 18, marginTop: 20, marginBottom: 5, textAlign: 'center' },
  headerInfo: { alignItems: 'center' },
  item: { fontSize: 15, marginBottom: 8, color: '#111' }
  ,
  empty: { fontSize: 16, fontStyle: 'italic', color: '#666', marginTop: 20 }
});

