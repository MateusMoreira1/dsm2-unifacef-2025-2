import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GalleryScreen from './screens/GalleryScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen
          name="Galeria"
          component={GalleryScreen}
          options={{
            title: 'Galeria',
            headerRight: () => (
              <Ionicons name="camera" size={28} color="#1976d2" style={{ marginRight: 16 }} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};