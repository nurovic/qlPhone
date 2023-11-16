import {Button, View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderNavigator from '../navigators/HeaderNavigator';
import React from 'react';
import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CONTINENT_QUERY = gql`
  query productList {
    products {
      _id
      productName
      description
      price
      count
      user {
        name
      }
      reviews {
        comment
        userId {
          name
        }
      }
    }
  }
`;
export default function Home() {
  const {data, loading} = useQuery(CONTINENT_QUERY);
  const navigation = useNavigation();
  const handleComment = async values => {
    await AsyncStorage.removeItem('token');
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderNavigator title="Home" backButton={false} />
        {data?.products?.map(item => (
          <Text>{item.productName}</Text>
        ))}
        <Icon name="facebook" size={25} />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Login')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
