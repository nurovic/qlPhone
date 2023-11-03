import {ScrollView} from 'react-native';
import React from 'react';
import DashboardList from '../components/Dashboard';
export default function Dashboard() {
  const list = [
    {id: 2, icon: 'create-outline', title: 'Add Product', route: 'AddProducts'},
    {id: 2, icon: 'basket-outline', title: 'Orders', route: 'Order'},
    {id: 2, icon: 'lock-open-outline', title: 'Change Password', route: ''},
    {id: 2, icon: 'logo-dropbox', title: 'Own Products', route: 'Own Products'},
  ];
  return (
    <ScrollView style={{margin: 12}}>
      {list?.map(item => (
        <DashboardList item={item} />
      ))}
    </ScrollView>
  );
}
