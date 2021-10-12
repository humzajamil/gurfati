import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/Home';
import City from '../components/City';
import {View} from 'react-native';
import DrawerContent from './DrawerContent';
import Search_screen from '../components/Search/Search_screen';
import Hotel_detail_screen from '../components/Hotel_details/Hotel_detail_screen';
import Reserve from '../components/Reserve';
import COLORS from '../constants/COLORS';

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
      <Stack.Screen name="Search_city" component={City} />
      <Stack.Screen name="Search_screen" component={Search_screen} />
      <Stack.Screen
        name="Hotel_detail_screen"
        component={Hotel_detail_screen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Hotel Booking',
          headerTintColor: COLORS.secondary,
          headerStyle: {backgroundColor: COLORS.primary},
        }}
        name="Reserve"
        component={Reserve}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Screens;
