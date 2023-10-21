import {Button, View,SafeAreaView, Text} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}
