import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NameContextProvider} from './Context/NameContext'
const Stack = createStackNavigator()

import UsersList from './screens/UsersList';
import UserInicio from './screens/UserInicio';
import UserDono from './Dono/UserDono';
import UserDog from './Dog/UserDog';
import VisuDono from './Dono/VisuDono';
import DetailDono from './Dono/DetailDono';
import FinalDono from './Dono/FinalDono';
import UserName from './screens/UserName';
import VisuDog from './Dog/VisuDog';
import DetailDog from './Dog/DetailDog';


function MyStack() {
  return (
    <NameContextProvider>
    <Stack.Navigator>

    <Stack.Screen name="Bem Vindo ao Dog Planet" component={UserName} />

    <Stack.Screen name="UserInicio" component={UserInicio} />
    
    <Stack.Screen name="VisuDog" component={VisuDog} />
    
    <Stack.Screen name="VisuDono" component={VisuDono} />

    <Stack.Screen name="UserDono" component={UserDono} />

    <Stack.Screen name="DetailDog" component={DetailDog} />

    <Stack.Screen name="FinalDono" component={FinalDono} />     
      
    <Stack.Screen name="UserDog" component={UserDog} />

    <Stack.Screen name="UsersList" component={UsersList} />

    <Stack.Screen name="DetailDono" component={DetailDono} />
      
    </Stack.Navigator>
    </NameContextProvider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
