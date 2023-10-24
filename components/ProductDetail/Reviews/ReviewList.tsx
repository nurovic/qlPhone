import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ReviewtListItem from './ReviewtListItem';
export default function ReviewListItem() {
  const navigation = useNavigation();

  const productList = [
    {
      _id: '64c674d2mnjfa5e841247bcd5430',
      title: 'Seaside Resort',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
      review: '1204 Reviews',
      price: '2321',
    },

    {
      _id: '64c671234d23cfa5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cf4a5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfa15e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfa25e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfa5eCA847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfaA5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfa5e847bc1235430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cf2a5e847bcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
    {
      _id: '64c674d23cfa532e8asdcd5430',
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
  ];
  return (
    <View>
      {productList?.slice(0, 2).map(item => (
        <View style={styles.listItem}>
          <ReviewtListItem item={item} />
        </View>
      ))}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Reviews', productList)}>
          <Text style={styles.buttonTitle}>All Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7d4bf3'
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: '#7d4bf3',
  },
});
