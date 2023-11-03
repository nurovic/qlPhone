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
import HeaderNavigator from '../navigators/HeaderNavigator';

export default function ProductDetail() {
  const route = useRoute();
  const id = route.params;
  console.log(id, 'product detail pages');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigator title="Product Name" backButton={true} />
      <ScrollView style={{marginBottom: 52}}>
        <ProductDetailItem />
        <Reviews />
        <MakeComment />
      </ScrollView>

      <View style={styles.priceCard}>
        <Text>2,23123 TL</Text>
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
