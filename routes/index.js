import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../containers/Home'
import Analyze from '../containers/Analyze'
import Profile from '../containers/Profile'
import History from '../containers/History'
import Add from '../containers/Add'
import { Icon, Container } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();

const getIcon = (route, focused) => {
  let iconName;
  if (route.name === 'Home') {
    iconName = 'ios-home';
  }
  else if (route.name === 'Analyze') {
    iconName = 'ios-pie'
  }
  else if (route.name === 'Add') {
    iconName = 'ios-add'
  }
  else if (route.name === 'History') {
    iconName = focused ? 'ios-list-box' : 'ios-list';
  }
  return iconName
}
const HomeStack = createStackNavigator();
function HomeStackScreen({ navigation }) {
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
    </HomeStack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName = getIcon(route, focused)

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Analyze" component={Analyze} />
        {/* <Tab.Screen name="Analyze" component={Analyze} />
        <Tab.Screen
          name="Add"
          options={{
            tabBarIcon: ({ color }) => (
              <Container
                style={{
                  position: 'absolute',
                  bottom: 0, // space from bottombar
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name='add' />
              </Container>
            )
          }}
          component={Add} /> */}

        {/* <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Profile" component={Profile} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}