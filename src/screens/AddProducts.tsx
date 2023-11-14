import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HeaderNavigator from '../navigators/HeaderNavigator';

export default function AddProducts() {
  return (
    <SafeAreaView >
      <HeaderNavigator
        title="Add Product"
        backButton={true}
      />

      <Text>AddProducts</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
