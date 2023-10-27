import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Profile from '../screens/Profile';
import Dsahboard from '../screens/Dashboard';
const Tab = createMaterialTopTabNavigator();

export default function ProfileNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Dashboard" component={Dsahboard} />
    </Tab.Navigator>
  );
}

