import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Rd';
import Sett from './Rf';
const Tab = createMaterialTopTabNavigator();

export default function Profil() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{
            height: 150,
            width: 150,
            resizeMode: 'cover',
            borderRadius: 100,
          }}
          source={{
            uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
          }}
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="ADAD" component={Home} />
        <Tab.Screen name="SetASDAStings" component={Sett} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
