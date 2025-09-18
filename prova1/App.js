import React from 'react';
import { SafeAreaView } from 'react-native';

// Importando suas telas
import Home from "./screens/HomeScreen";
import InternetImage from "./screens/InternetImageScreen";
import LocalImage from "./screens/LocalImageScreen";
import Icons from "./screens/IconsScreen";

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="InternetImage" component={InternetImage} />
          <Stack.Screen name="LocalImage" component={LocalImage} />
          <Stack.Screen name="Icons" component={Icons} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
