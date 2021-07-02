
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/Search';
import State from './screens/State';
import Charts from './screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './components/Header'

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: '#000000',
        inactiveBackgroundColor: '#000000',       
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



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerTitle: props => <Header />,
           headerStyle: {
            backgroundColor: 'black',
          }
          } }
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
