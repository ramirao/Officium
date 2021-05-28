
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import State from './screens/State';
import Charts from './screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabCarOptions={{
        activeTinColor: '#26872a',
        inactiveTinColor: '#fff',
        activeBackgroundColor: '#000000',
        inactiveBackgroundColor: '#000000',
          style: { 
            backgroundColor: '#000000',
            paddingBottom: 3
          }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Charts}
        options={{ 
          tabBarLabel:'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-analytics" color={color} size={size} />
          )
        }}
       />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          tabBarLabel:'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map-search" color={color} size={size} />
          )
        }}
        />
      <Tab.Screen 
        name="State" 
        component={State} 
        options={{ 
          tabBarLabel:'State',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="rocket" color={color} size={size} />
          )
        }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
