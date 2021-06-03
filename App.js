import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import NewCustomer from './views/NewCustomer';
import Details from './views/Details';

const Stack = createStackNavigator();


const App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
        >
          <Stack.Screen
            name="Inicio"
            component={Home}
          />
          <Stack.Screen
            name="NuevoCliente"
            component={NewCustomer}
            options={{
              title: "Nuevo Cliente"
            }}
          />
          <Stack.Screen
            name="Detalles"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
