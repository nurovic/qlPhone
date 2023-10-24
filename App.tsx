// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './navigators/TabNavigator';
import Login from './screens/Login';
import ProductDetail from './screens/ProductDetail';
import Reviews from './screens/Reviews';


// const Stack = createStackNavigator();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Reviews" component={Reviews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
