import React, {useContext, useEffect} from 'react';
import {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../Navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface PersonaScreenProps
  extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen: FunctionComponent<PersonaScreenProps> = ({
  route,
  navigation,
}: PersonaScreenProps) => {
  const params = route.params;
  //const params = route.params as RouteParams;
  const {changeUser} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  }, []);

  useEffect(() => {
    changeUser(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Persona Screen</Text>
    </View>
  );
};

export default PersonaScreen;
