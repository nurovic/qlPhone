import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import OrderListItem from './OrderListItem';
export default function index() {
    const completeOrder = () => {
        console.log('completed Order')
    }
  const productList = [
    {
      _id: '64c674d23Scfa5e847bcd5430',
      title: 'Seaside Resort',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
      review: '1204 Reviews',
      price: '2321',
    },

    {
      _id: '64c674d23cAfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cAfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cAfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cAfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cAfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
  ];
  return (
    <View style={{height: '100%'}}>
      <FlatList data={productList} renderItem={item => <OrderListItem />} />
      <View style={styles.infoContainer}>
        <View style={styles.infoDetailContainer}>
          <Text style={{color: '#181cf1b0', fontWeight: 800}}>
            Selected Products
          </Text>
          <Text style={{fontWeight: 600}}>12.000,00 ₺</Text>
        </View>

        <TouchableOpacity
        onPress={completeOrder}
        style={styles.button}>
          <Text style={{color: '#fff'}}>Complete Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    height: 56,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#b2b2b2',
  },
  infoDetailContainer: {
    paddingVertical: 6,
    height: '100%',
    justifyContent: 'space-between',
  },
  button: {
    height: '80%',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#181cf1b0',
    borderRadius: 8,
  },
});
