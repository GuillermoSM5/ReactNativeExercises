import React, {useContext} from 'react';
import {FunctionComponent} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface AlbumScreenProps {}

const AlbumScreen: FunctionComponent<AlbumScreenProps> = () => {
  const {authState, logout} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Album Screm</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.isLoggedIn && (
        <Button title="Cerrar sesión" onPress={logout} />
      )}
    </View>
  );
};

export default AlbumScreen;
