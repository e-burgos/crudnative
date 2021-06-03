import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

// Components
import Header from './components/ui/Header';

// Views
import Home from './views/Home';
import NewCustomer from './views/NewCustomer';
import Details from './views/Details';

// Creamos Stack para las diferentes pantallas
const Stack = createStackNavigator();

// Creamos el theme con react-native-paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
  }
}


const App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold',
                textTransform: 'uppercase'
              },
            }}
        >
          <Stack.Screen
            name="Inicio"
            component={Home}
            options={({navigation, route}) => ({
              headerLeft: (props) => (
                <Header {...props}
                  navigation={navigation} 
                  route={route}
                />
              )
            })}
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
