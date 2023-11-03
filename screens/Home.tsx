import {Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderNavigator from '../navigators/HeaderNavigator';
import React from 'react';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HeaderNavigator title="Home" backButton={false} />

      <Icon name="facebook" size={25} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}
