import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import OwnerList from '../components/OwnerProducts/OwnerList';
import HeaderNavigator from '../navigators/HeaderNavigator';
const productList = [
  {
    _id: '64c674d23cfa5e847bcd5430',
    title: 'Seaside Resort',
    imageUrl:
      'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
    review: '1204 Reviews',
    price: '2321',
  },
  {
    _id: '64c674d23cfa5e847bcd5430',
    title: 'Seaside Resort',
    imageUrl:
      'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
    review: '1204 Reviews',
    price: '2321',
  },
  {
    _id: '64c674d23cfa5e847bcd5430',
    title: 'Seaside Resort',
    imageUrl:
      'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
    review: '1204 Reviews',
    price: '2321',
  },

  {
    _id: '64c674d23cfa5e847bcd5430',
    title: 'PC',
    imageUrl:
      'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
    review: '14 Reviews',
    price: '232',
  },
];
export default function OwnProducts() {
  return (
    <SafeAreaView>
      <HeaderNavigator title="Own Product" backButton={true} />
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <OwnerList item={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 0.49,
    height: 130,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 12,
    marginRight: 2,
  },
});
