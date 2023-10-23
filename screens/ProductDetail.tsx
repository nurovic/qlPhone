import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import ProductDetailItem from '../components/ProductDetailItem';

export default function ProductDetail() {
  const route = useRoute();
  const id = route.params;
  console.log(id);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProductDetailItem />
        <ProductDetailItem />
      </ScrollView>

      <View style={styles.priceCard}>
        <Text>2,23123 TL</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Add Order</Text>
        </TouchableOpacity>
      </View>
    </View>
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
