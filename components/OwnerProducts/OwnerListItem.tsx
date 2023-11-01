import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
const OwnerListItem = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={{
            height: 115,
            width: 115,
            resizeMode: 'cover',
            borderRadius: 5,
          }}
          source={{
            uri: 'https:d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
          }}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.title}>Mac 2023 M3</Text>
        <Text style={styles.description}>
          MacBook Pro gibisi yok. Apple çipin olağanüstü güç verimliliği
          sağlayan performansı, 22 saate kadar pil ömrü.
        </Text>
      </View>
    </View>
  );
};

export default OwnerListItem;

const styles = StyleSheet.create({
  imgContainer: {
    marginLeft: 8,
    height: 130,
    width: 115,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  cardInfo: {
    margin: 6,
  },
  description: {
    width: 220,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold'
  }
});
