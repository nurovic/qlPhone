import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ReviewtListItem from '../components/ProductDetail/Reviews/ReviewtListItem';

export default function Reviews({route}) {
  const reviewsList = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={reviewsList}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View>
            <ReviewtListItem item={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 14,
  }
});
