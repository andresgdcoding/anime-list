import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';

import AnimeScreen from './src/screens/AnimeScreen';
import FollowingScreen from './src/screens/FollowingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import SigninScreen from './src/screens/SigninScreen';
import WatchedScreen from './src/screens/WatchedScreen';

const FollowingFlow = createStackNavigator({
  Following: FollowingScreen,
  AnimeDetail: AnimeScreen,
});

const SearchFlow = createStackNavigator({
  Search: SearchScreen,
  AnimeDetail: AnimeScreen,
});

const WatchedFlow = createStackNavigator({
  Watched: WatchedScreen,
  AnimeDetail: AnimeScreen,
});

const LoginFlow = createStackNavigator({
  Login: LoginScreen,
  Signin: SigninScreen,
});

const switchNavigator = createSwitchNavigator({
  LoginFlow,
  mainFlow: createBottomTabNavigator({
    FollowingFlow,
    SearchFlow,
    WatchedFlow,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
