import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../screens/Profile';
import Dsahboard from '../screens/Dashboard';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

export default function ProfileNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dsahboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
