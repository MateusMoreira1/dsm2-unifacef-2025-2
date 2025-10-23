
import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, SectionList, TextInput, Dimensions } from 'react-native';

export default function App() {
  // Lista de produtos
  const [filter, setFilter] = useState('');
  const products = useMemo(() => [
    { id: '1', name: 'Arroz', price: 10.99, category: 'Alimentos' },
    { id: '2', name: 'Feijão', price: 8.99, category: 'Alimentos' },
    { id: '3', name: 'Detergente', price: 3.50, category: 'Limpeza' },
    { id: '4', name: 'Sabão em pó', price: 12.00, category: 'Limpeza' },
    { id: '5', name: 'Refrigerante', price: 6.00, category: 'Bebidas' },
    { id: '6', name: 'Suco', price: 4.50, category: 'Bebidas' },
    { id: '7', name: 'Macarrão', price: 5.00, category: 'Alimentos' },
    { id: '8', name: 'Água Sanitária', price: 4.00, category: 'Limpeza' },
    { id: '9', name: 'Cerveja', price: 7.00, category: 'Bebidas' },
  ], []);

  // Filtrar produtos por nome
  const filteredProducts = useMemo(() => {
    if (!filter.trim()) return products;
    return products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, products]);

  // Agrupar produtos por categoria
  const sections = useMemo(() => {
    const grouped = {};
    filteredProducts.forEach(prod => {
      if (!grouped[prod.category]) grouped[prod.category] = [];
      grouped[prod.category].push(prod);
    });
    return Object.keys(grouped).map(category => ({
      title: category,
      data: grouped[category],
    }));
  }, [filteredProducts]);

  // Memoizar renderItem e renderSectionHeader
  const renderItem = useCallback(({ item }) => (
    <ProductItem name={item.name} price={item.price} />
  ), []);

  const renderSectionHeader = useCallback(({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  ), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtrar por nome..."
        value={filter}
        onChangeText={setFilter}
        autoCapitalize="none"
      />
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado.</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

// Componente memoizado para item de produto
const ProductItem = React.memo(({ name, price }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>R$ {price.toFixed(2)}</Text>
    </View>
  );
});

// Estilos responsivos
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 40,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listContent: {
    paddingBottom: 24,
  },
  sectionHeader: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop: 12,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  itemName: {
    fontSize: 16,
    color: '#222',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00796b',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 32,
    fontSize: 16,
  },
});
