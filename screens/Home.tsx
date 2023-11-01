import {Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}
