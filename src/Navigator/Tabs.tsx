import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
//import Tab3Screen from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores, styles} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TopTapNavigator} from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          switch (route.name) {
            case 'Tab1Screen':
              return <Icon name="airplane-outline" size={20} color="white" />;
            case 'Tab2Screen':
              return <Icon name="boat-outline" size={20} color="white" />;
            case 'StackNavigator':
              return <Icon name="skull-outline" size={20} color="white" />;
            default:
              return <Icon name="airplane-outline" size={20} color="white" />;
          }
        },
      })}>
      <BottomTabsAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabsAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTapNavigator}
      />
      <BottomTabsAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'STN';
              break;
            default:
              iconName = 'icon';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          //tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
