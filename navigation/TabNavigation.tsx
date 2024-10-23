// TabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import { Home } from '../screens/home/Home';
import { Clients } from '../screens/clients/Clients';
import { Products } from '../screens/products/Products';    
import { Settings } from '../screens/settings/Settings';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerStyle: {
          backgroundColor: "#6a1010",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
       
      }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={24} /> }} />
      <Tab.Screen name="Clients" component={Clients} options={{ tabBarLabel: 'Clients', tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={24} /> }} />
      <Tab.Screen name="Screen3" component={Products} options={{ tabBarLabel: 'Products', tabBarIcon: ({ color, size }) => <Ionicons name="cart" color={color} size={24} /> }} />
      <Tab.Screen name="Screen4" component={Settings} options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={24} /> }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
