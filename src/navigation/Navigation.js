import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationList from './NavigationList';

const Stack = createNativeStackNavigator();

export default () => {
  const getAllScreens = () => {
    let screens = [];
    NavigationList.forEach((item) => {
      screens.push(
        <Stack.Screen
          key={item.name}
          name={item.name}
          options={item.options}
          component={item.component}
        />
      );
    });
    return screens;
  };

  return <Stack.Navigator>{getAllScreens()}</Stack.Navigator>;
};
