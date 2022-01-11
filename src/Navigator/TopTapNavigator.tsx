import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colores.primary},
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIcon: ({color, focused}) => {
          switch (route.name) {
            case 'Chat':
              return (
                <Icon
                  name="chatbubbles-outline"
                  size={20}
                  color={colores.primary}
                />
              );
            case 'Contact':
              return (
                <Icon name="people-outline" size={20} color={colores.primary} />
              );
            case 'Album':
              return (
                <Icon name="images-outline" size={20} color={colores.primary} />
              );
            default:
              return (
                <Icon name="images-outline" size={20} color={colores.primary} />
              );
          }
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
