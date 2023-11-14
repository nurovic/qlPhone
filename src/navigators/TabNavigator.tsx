/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Account from '../screens/Account';
import Order from '../screens/Order';
import ProductsDrawer from '../screens/ProductsDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [checkUser, setCheckUser] = useState<boolean>(false);

  const checkToken = async () => {

    const token = await AsyncStorage.getItem('Token');
    console.log(token);
    if (token !== null) {
      setCheckUser(true);
    } else {
      setCheckUser(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsDrawer}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="tag-text" color={color} size={size} />
          ),
        }}
      />

      {checkUser ? (
        <>
          <Tab.Screen
            name="Order"
            component={Order}
            options={{
              tabBarLabel: 'Order',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="basket"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
