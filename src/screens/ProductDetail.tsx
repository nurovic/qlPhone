import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import ProductDetailItem from '../components/ProductDetail/ProductDetailItem';
import Reviews from '../components/ProductDetail/Reviews';
import MakeComment from '../components/ProductDetail/MakeComment';
import {useQuery} from '@apollo/client';
import HeaderNavigator from '../navigators/HeaderNavigator';
import {GET_PRODUCT_ID} from '../graphql/Query/products';
export default function ProductDetail() {
  const route = useRoute();
  const id = route.params;
  const {error, loading, data, refetch} = useQuery(GET_PRODUCT_ID, {
    variables: {id},
  });
  // const {productName} = data?.productById;

  if (loading) return <Text> Loading. . .</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigator
        title={data?.productById?.productName}
        backButton={true}
      />
      <ScrollView style={{marginBottom: 52}}>
        <ProductDetailItem data={data?.productById} />
        <Reviews />
        <MakeComment />
      </ScrollView>

      <View style={styles.priceCard}>
        <Text>2,23123 TL </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Add Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  priceCard: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: 52,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fdfdfd',
  },
  container: {flex: 1},
  button: {
    backgroundColor: '#181cf1b0',
    width: 110,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
