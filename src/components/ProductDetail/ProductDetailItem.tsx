import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

export default function ProductDetailItem({data}) {
  return (
    <View>
      <Image
        style={{
          height: 400,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
        source={{
          uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
        }}
      />
      <View style={styles.productInfoContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {' '}
          {data?.productName}{' '}
        </Text>
        <Text style={{fontWeight: 'medium', fontSize: 13, marginTop: 5}}>
          {data?.description}
        </Text>
        <Text style={{fontWeight: 'regular', fontSize: 14, marginTop: 5}}>
          (2) Reviews{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productInfoContainer: {
    margin: 12,
  },
});
