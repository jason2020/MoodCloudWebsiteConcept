import React from "react";
import HomeScreen from "./src/scenes/home";
import DataScreen from "./src/scenes/data";
import CommunityScreen from "./src/scenes/community";
import AppsScreen from "./src/scenes/apps";
import AccountScreen from "./src/scenes/account";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Data" component={DataScreen} />
        <Drawer.Screen name="Community" component={CommunityScreen} />
        <Drawer.Screen name="Apps" component={AppsScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App