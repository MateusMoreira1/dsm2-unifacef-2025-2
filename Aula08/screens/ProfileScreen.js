import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // hook para permissão de câmera (expo-image-picker)
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    (async () => {
      try {
        const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (mediaStatus.status !== 'granted') {
          Alert.alert('Permissão requerida', 'Precisamos de permissão para acessar a galeria.');
        }

        // se ainda não concedeu permissão de câmera, solicita via hook
        if (!permission?.granted) {
          requestPermission();
        }
      } catch (e) {
        console.log('Permission error', e);
      }
    })();
  }, [permission, requestPermission]);

  const pickImage = async () => {
    try {
      setLoading(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      // SDK 49+ retorna { canceled, assets }
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log('pickImage error', e);
      Alert.alert('Erro', 'Não foi possível carregar a imagem da galeria');
    } finally {
      setLoading(false);
    }
  };

  // Abre a câmera e salva a imagem escolhida
  async function abrirCamera() {
    try {
      setLoading(true);
      console.log('Tentando abrir câmera...');

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        exif: false,
      });

      console.log('Resultado da câmera:', result);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        console.log('Foto capturada:', result.assets[0].uri);
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error('Erro ao abrir câmera:', e);
      Alert.alert(
        'Erro na câmera',
        'Não foi possível acessar a câmera. Erro: ' + e.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={
            image
              ? { uri: image }
              : { uri: 'https://placehold.co/300x300?text=Avatar' }
          }
          style={styles.avatar}
        />
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonWrap}>
          <Button 
            title="Tirar foto" 
            onPress={abrirCamera}
            disabled={loading} 
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button 
            title="Selecionar da galeria" 
            onPress={pickImage}
            disabled={loading} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#eee',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: '80%',
    alignItems: 'center',
  },
  buttonWrap: {
    width: '100%',
    marginBottom: 12,
  },
});
