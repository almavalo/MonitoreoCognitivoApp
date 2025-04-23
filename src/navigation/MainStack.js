import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PantallaInicio, Perfil, Test, TestQuestions, } from '../views'
import { Questions } from '../components';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="TestQuestions" component={TestQuestions} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default MainStack;
