import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

export default function ProductDetailItem() {
  return (
    <View>
      <Image
        style={{
          height: 400,
          resizeMode: 'cover',
          borderRadius: 12,
          borderRadius: 5,
        }}
        source={{
          uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
        }}
      />
      <View style={styles.productInfoContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>MACBOOK PRO 13'</Text>
        <Text style={{fontWeight: 'medium', fontSize: 13, marginTop: 5}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          animi eos eum hic consequatur itaque. Quos dicta quasi enim rerum.{' '}
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
