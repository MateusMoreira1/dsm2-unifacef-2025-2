import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={48} color="#1976d2" style={styles.icon} />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.img}
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }}
        style={styles.img}
      />
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 32, backgroundColor: '#fff' },
  icon: { marginBottom: 16 },
  img: { width: 250, height: 150, marginVertical: 8, borderRadius: 12 }
});