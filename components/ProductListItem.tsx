import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const onPress = (id) => {
  console.log('id')
  console.log(id)
}

const ProductListItem = ({item}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={{height: 180, resizeMode: 'cover', borderRadius: 12, borderRadius: 5}}
        source={{
          uri: item.imageUrl,
        }}
      />
      <View style={styles.infoContainer}>
        <View>
          <Text>asdasd</Text>
        </View>
        <TouchableOpacity
        onPress={() => onPress(item._id)}
        style={styles.button}>
          <Text>Add Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FF0000',
    height: '100%',
  },
  infoContainer: {
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
