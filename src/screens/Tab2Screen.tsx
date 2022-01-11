import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

interface Tab1ScreenProps {}

const Tab2Screen: FunctionComponent<Tab1ScreenProps> = () => {
  return (
    <View>
      <Text>Tab 2 Screen</Text>
    </View>
  );
};

export default Tab2Screen;
