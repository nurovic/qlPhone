import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

export default function ReviewtListItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: 700, fontSize: 14}}>Mert Nurovic</Text>
        <Text style={{fontWeight: 500, color: 'gray'}}>24.10.2023</Text>
      </View>
      <View>
        <Text style={{fontWeight: 500, fontSize: 14, color: 'gray'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor a
          aperiam laborum nostrum accusantium quidem quas voluptatibus fuga
          neque odio.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  container: {
    paddingBottom: 12,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 12
  },
});
