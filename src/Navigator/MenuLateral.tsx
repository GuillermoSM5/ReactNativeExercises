import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import SettingsScreen from '../screens/SettingScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 700 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de Menu */}
      <View style={styles.menuContainer}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tabs')}
            style={styles.menuBoton}>
            <View>
              <Icon name="rocket" size={25} color={colores.primary} />
            </View>
            <Text style={styles.menuTexto}>Navegacion</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingScreen')}
          style={styles.menuBoton}>
          <Icon name="settings" size={25} color={colores.primary} />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
