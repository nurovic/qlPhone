import {SafeAreaView} from 'react-native';
import OrderList from '../components/Order';
import React from 'react';
import HeaderNavigator from '../navigators/HeaderNavigator';

export default function Order() {
  return (
    <SafeAreaView>
      <HeaderNavigator title="Order" backButton={true} />
      <OrderList />
    </SafeAreaView>
  );
}
