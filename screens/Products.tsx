import {
  StyleSheet,
  Text,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductListItem from '../components/ProductListItem';
import HeaderNavigator from '../navigators/HeaderNavigator';

export default function Products() {
  const [refreshing, setRefreshing] = useState(false);
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
      title: 'PC',
      imageUrl:
        'https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp',
      review: '14 Reviews',
      price: '232',
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect');
      setRefreshing(false);
    }, 3000);
  }, []);
  const onRefresh = () => {
    setTimeout(() => {
      console.log('onRefresh');
      setRefreshing(false);
      productList.push({
        _id: '64c674d23cfa5e847bcd5430',
        title: 'PC',
        imageUrl:
          'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
        review: '14 Reviews',
        price: '232',
      });
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.wrapCon}>
      <HeaderNavigator title="Products" backButton={false} />

      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={productList}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => item._id}
        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <ProductListItem item={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapCon: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 40,
  },
  listItem: {
    flex: 0.49,
    height: 370,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 12,
    // borderWidth: .3,
    // borderColor: '#82828214y',
    marginRight: 2,
  },
});
