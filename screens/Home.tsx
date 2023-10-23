import {Button, SafeAreaView} from 'react-native';
import React from 'react';

export default function Home({
  navigation,
}: {
  navigation: {
    navigate: (screenName: string) => void;
  };
}) {
  return (
    <SafeAreaView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}
