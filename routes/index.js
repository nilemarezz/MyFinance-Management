import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Analyze from '../containers/Analyze'
import History from '../containers/History'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack'
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="tomato"
        barStyle={{ backgroundColor: 'white' }}
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-list" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Analyze"
          component={Analyze}
          options={{
            tabBarLabel: 'Analyze',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-pie" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
