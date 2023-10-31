import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function OwnerListItem() {
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
            uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
          }}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text>MEr</Text>
      </View>
    </View>
  );
}

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
  },
  cardInfo: {
    margin: 6,
  },
});
