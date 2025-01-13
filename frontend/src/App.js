import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ParentScreen from './screens/ParentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Parent">
        <Stack.Screen name="Parent" component={ParentScreen} options={{ title: 'Panel de Padres' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
