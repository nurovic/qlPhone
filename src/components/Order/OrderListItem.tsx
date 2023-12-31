import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {OrderCardUpdate} from '../../graphql/Mutations/order';
import {useMutation} from '@apollo/client';

export default function OrderListItem({orderItem, refetchQuery}: any) {
  const navigation = useNavigation();
  const {product, orderCount} = orderItem?.item;
  const [updateOrderCardProduct] = useMutation(OrderCardUpdate, {
    onCompleted: () => {
      // Mutasyon tamamlandığında useQuery'i yeniden çağır
      refetchQuery();
    },
  });

  const handleOrder = async (type: boolean, id: string) => {
    try {
      await updateOrderCardProduct({
        variables: {
          productId: id,
          count: type,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', product._id)}
        style={styles.productContainer}>
        <Image
          style={{
            height: 90,
            width: 90,
            resizeMode: 'cover',
            borderRadius: 12,
            borderRadius: 5,
          }}
          source={{
            uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
          }}
        />
        <View style={{marginLeft: 8}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            {product.productName}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.orderContainer}>
        <View style={styles.orderButtons}>
          <Text
            style={{color: 'orange', fontWeight: 800}}
            onPress={() => handleOrder(false, orderItem.item._id)}>
            -
          </Text>
          <Text>{orderCount}</Text>
          <Text
            style={{color: 'orange', fontWeight: 800}}
            onPress={() => handleOrder(true, orderItem.item._id)}>
            +
          </Text>
        </View>
        <Text style={{fontWeight: 600, fontSize: 13}}>
          {product?.price.toLocaleString('tr')} ₺
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  container: {
    padding: 12,
    marginBottom: 14,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderColor: '#b2b2b2',
    borderRadius: 6,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 0.5,
    borderRadius: 12,
    width: 60,
  },
});
