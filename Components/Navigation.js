import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Screens/Home';
import { DetailsScreen } from './Screens/Details';
import { StepperPage1 } from './Screens/StepperPage1';
import { StepperPage2 } from './Screens/StepperPage2';
import { StepperPage3 } from './Screens/StepperPage3';
import { globalStyles } from '../styles/styles';



const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'>
    <Screen  name='StepperPage1' component={StepperPage1}/>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);