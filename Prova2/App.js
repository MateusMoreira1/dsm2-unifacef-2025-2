import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MeusScreen from './screens/MeusScreen';
import EquipeScreen from './screens/EquipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meus" component={MeusScreen} />
        <Stack.Screen name="Equipe" component={EquipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}