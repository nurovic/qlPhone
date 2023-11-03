import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import React from 'react';
import ReviewtListItem from '../components/ProductDetail/Reviews/ReviewtListItem';
import HeaderNavigator from '../navigators/HeaderNavigator';

export default function Reviews({route}) {
  const reviewsList = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNavigator title="Reviews" backButton={true} />

      <FlatList
        data={reviewsList}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View>
            <ReviewtListItem item={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
