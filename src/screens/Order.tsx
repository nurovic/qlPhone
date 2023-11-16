import {SafeAreaView, Text} from 'react-native';
import OrderList from '../components/Order';
import React from 'react';
import HeaderNavigator from '../navigators/HeaderNavigator';
import {useQuery} from '@apollo/client';
import {GET_ORDER_CARD} from '../graphql/Query/orderCard';
export default function Order() {
  const {error, loading, data, refetch} = useQuery(GET_ORDER_CARD);
  const refetchQuery = () => {
    refetch();
  };

  if (loading) return <Text> Loading. . .</Text>;
  return (
    <SafeAreaView>
      <HeaderNavigator title="Order" backButton={true} />
      <OrderList orderList={data?.getOrderCard} refetchQuery={refetchQuery} />
    </SafeAreaView>
  );
}
