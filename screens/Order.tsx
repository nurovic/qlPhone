import {View} from 'react-native';
import OrderList from '../components/Order';
import React from 'react';

export default function Order() {
  return (
    <View style={{margin: 12}}>
      <OrderList />
    </View>
  );
}
