import React, {useContext} from 'react';
import {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles, colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface SettingsScreenProps {}

const SettingsScreen: FunctionComponent<SettingsScreenProps> = () => {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>Settings Screens</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}
          style={{marginLeft: 10}}
        />
      )}
    </View>
  );
};

export default SettingsScreen;
