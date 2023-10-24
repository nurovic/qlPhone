import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReviewList from './ReviewList';
export default function Reviews() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reviews</Text>
      </View>
      <ReviewList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 14,
    color: 'gray',
  },
  titleContainer: {
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 2,
    marginBottom: 14,
  },
});
