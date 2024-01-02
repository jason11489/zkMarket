import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';

import Home from './src/Screens/Home';
import Login from './src/Screens/Login';

const Stack = createStackNavigator();


function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name = "Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
