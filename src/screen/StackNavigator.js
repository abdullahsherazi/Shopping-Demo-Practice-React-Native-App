import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Demo from "./Demo";
import ShoppyMenu from "./ShoppyMenu";
import SplashScreen from "./SplashScreen";
import WorkThrough from "./WorkThrough";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import DrawerNavigator from "./DrawerNavigator";

// import i18n from 'i18n-js';
// import en from '../Language/en';
// import ar from '../Language/ar';

// import { Provider } from 'react-redux'
// import store from '../Redux/store/Store'

const AppNavigator = createStackNavigator(
  {
    Demo: {
      screen: Demo,
      navigationOptions: () => ({
        header: null
      })
    },
    ShoppyMenu: {
      screen: ShoppyMenu,
      navigationOptions: () => ({
        header: null
      })
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    WorkThrough: {
      screen: WorkThrough,
      navigationOptions: () => ({
        header: null
      })
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: () => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        header: null
      })
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Demo"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    // i18n.fallbacks = true;
    // i18n.translations = {
    //  en,
    //  ar
    // }
    return (
      // <Provider store={store}>
      <AppContainer />
      //   </Provider>
    );
  }
}
