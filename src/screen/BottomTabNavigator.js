import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeMenu from "./HomeMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default createMaterialBottomTabNavigator(
  {
    Menu: {
      screen: HomeMenu,
      navigationOptions: () => ({
        tabBarIcon: () => <FontAwesome5 name="cube" size={24} color="#9e9e9e" />
      })
    },

    Sale: {
      screen: HomeMenu,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Foundation name="burst-sale" size={24} color="#9e9e9e" />
        )
      })
    },

    Favorites: {
      screen: HomeMenu,
      navigationOptions: () => ({
        tabBarIcon: () => <AntDesign name="hearto" size={24} color="#9e9e9e" />
      })
    },

    Bag: {
      screen: HomeMenu,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <SimpleLineIcons name="handbag" size={24} color="#9e9e9e" />
        )
      })
    },

    Alert: {
      screen: HomeMenu,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <FontAwesome name="bell-o" size={24} color="#9e9e9e" />
        )
      })
    }
  },

  {
    initialRouteName: "Menu",
    shifting: false,
    activeColor: "black",
    inactiveColor: "#a0a3ac",
    barStyle: {
      backgroundColor: "white",
      borderTopWidth: 0.5,
      borderTopColor: "#9e9e9e"
    },
    labeled: false
  }
);
