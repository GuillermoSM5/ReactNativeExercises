import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchalbeIcon from '../components/TouchableIcon';

interface Tab1ScreenProps {}

const Tab1Screen: FunctionComponent<Tab1ScreenProps> = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen</Text>
      {/* <Icon name="airplane-outline" size={80} color={colores.primary} /> */}
      <TouchalbeIcon iconName="airplane-outline" />
      <TouchalbeIcon iconName="barbell-outline" />
      <TouchalbeIcon iconName="code-outline" />
    </View>
  );
};

export default Tab1Screen;
