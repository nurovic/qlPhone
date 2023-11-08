import {Button, View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderNavigator from '../navigators/HeaderNavigator';
import React from 'react';
import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;
export default function Home() {
  const {data, loading} = useQuery(CONTINENT_QUERY);
  console.log();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HeaderNavigator title="Home" backButton={false} />
      {data.continents?.map(item => 
      (<Text>{item.name}</Text>)
      )}
      <Icon name="facebook" size={25} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}
