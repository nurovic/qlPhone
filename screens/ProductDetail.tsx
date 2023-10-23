import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function ProductDetail() {
  const route = useRoute();
  const id = route.params;
  console.log( id);
  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
