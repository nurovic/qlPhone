import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface IHeaderNavigate {
  title: string;
  navigate: string;
}

const HeaderNavigator = ({title, navigate}: IHeaderNavigate) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(`${navigate}`)}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavigator;

const styles = StyleSheet.create({});
