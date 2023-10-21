import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Rd';
import Sett from './Rf';
const Tab = createMaterialTopTabNavigator();

export default function Profil() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen name="ADAD" component={Home} />
        <Tab.Screen name="SetASDAStings" component={Sett} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
