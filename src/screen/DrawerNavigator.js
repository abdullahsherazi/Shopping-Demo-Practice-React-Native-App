import React from "react";
import {
  createDrawerNavigator,
  BottomTabBar,
  createBottomTabNavigator
} from "react-navigation";
import { Dimensions } from "react-native";
import MenuDrawer from "./MenuDrawer";

import BottomTabNavigator from "./BottomTabNavigator";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.73,
  contentComponent: ({ navigation }) => {
    //MenuDrawer is in other file because cant connect DrawerNavigator and MenuDrawer
    //in connect statement
    return <MenuDrawer navigation={navigation} />;
  }
};

export default createDrawerNavigator(
  {
    Categories: {
      screen: BottomTabNavigator
    }
  },
  DrawerConfig
);
