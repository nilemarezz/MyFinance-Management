import * as React from 'react';
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Add from '../containers/Add'
import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();

export function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" >
        {props => <Home navigation={navigation} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Profile" >
        {props => <Profile navigation={navigation} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Add" >
        {props => <Add navigation={navigation} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}