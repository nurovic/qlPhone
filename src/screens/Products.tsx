import {
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductListItem from '../components/ProductListItem';
import HeaderNavigator from '../navigators/HeaderNavigator';
import {GET_PRODUCTS} from '../graphql/Query/products';
import {useQuery} from '@apollo/client';

export default function Products() {
  const [refreshing, setRefreshing] = useState(false);
  const {error, loading, data} = useQuery(GET_PRODUCTS);

  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect');
      setRefreshing(false);
    }, 3000);
  }, []);
  const onRefresh = () => {
    setTimeout(() => {
      console.log('onRefresh');
    }, 2000);
  };

  if (loading) return <Text> Loading. . .</Text>;

  return (
    <SafeAreaView style={styles.wrapCon}>
      <HeaderNavigator title="Products" backButton={false} />

      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={data?.products}
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
