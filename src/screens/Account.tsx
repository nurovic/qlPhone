import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import ProfileNavigator from '../navigators/ProfileNavigator';

export default function Account() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: 'cover',
            borderRadius: 100,
          }}
          source={{
            uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg',
          }}
        />
      </View>
      <ProfileNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
