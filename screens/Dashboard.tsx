import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  const list = [
    {id: 2, title: 'Add Product', route: 'AddProducts'},
    {id: 2, title: 'Orders', route: 'Order'},
    {id: 2, title: 'Change Password', route: ''},
    {id: 2, title: 'Own Products', route: 'Own Products'},
  ];
  return (
    <ScrollView style={{margin: 12}}>
      {list?.map(a => (
        <TouchableOpacity
          onPress={() => navigation.navigate(a.route)}
          style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 700, color: '#424242'}}>
            {a.title}{' '}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },
});
