import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 700 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingScreen"
        options={{title: 'settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
