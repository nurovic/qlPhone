import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigatorComponent from '../components/DrawerNavigator';
const Drawer = createDrawerNavigator();
import Products from '../screens/Products';

const ProductsDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerNavigatorComponent {...props} />;
      }}>
      <Drawer.Screen name="Products" component={Products} />
    </Drawer.Navigator>
  );
};

export default ProductsDrawer;

const styles = StyleSheet.create({});
