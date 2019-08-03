import React from 'react';
import dva from 'dva';
import { connect } from 'dva';
import createLoading from 'dva-loading';
import MainScreen from './src/screens/main';
import WeatherInfoScreen from './src/screens/weatherInfo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    WeatherInfo: WeatherInfoScreen
  },
  {
    initialRouteName: 'Main'
  }
);

export default createAppContainer(AppNavigator);
