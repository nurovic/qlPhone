import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import OrderListItem from './OrderListItem';
export default function index({orderList, refetchQuery}) {
  const completeOrder = () => {
    console.log('completed Order');
  };

  return (
    <View>
      <FlatList
        data={orderList.product}
        renderItem={item => <OrderListItem orderItem={item} refetchQuery={refetchQuery} />}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoDetailContainer}>
          <Text style={{color: '#181cf1b0', fontWeight: 800}}>
            Selected Products ({orderList.piece})
          </Text>
          <Text style={{fontWeight: 600}}>
            {orderList?.amount} ₺
          </Text>
        </View>

        <TouchableOpacity onPress={completeOrder} style={styles.button}>
          <Text style={{color: '#fff'}}>Complete Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    height: 70,
    top: 470,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#b2b2b2',
    backgroundColor: '#fff',
  },
  infoDetailContainer: {
    paddingVertical: 6,
    justifyContent: 'space-between',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#181cf1b0',
    borderRadius: 8,
  },
});
