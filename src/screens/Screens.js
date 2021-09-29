import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/Home';
import {View} from 'react-native';
import DrawerContent from './DrawerContent';

function Feed() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

function Article() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Screens = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MyDrawer} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Screens;
