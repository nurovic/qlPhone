import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const onPress = (id: string) => {
  console.log('id');
  console.log(id);
};

const ProductListItem = ({item}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', item._id)}
      style={styles.container}>
      <View>
        <Image
          style={{
            height: 180,
            resizeMode: 'cover',
            borderRadius: 12,
            borderRadius: 5,
          }}
          source={{
            uri: item.imageUrl,
          }}
        />
      </View>
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
    </TouchableOpacity>
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
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
