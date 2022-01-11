import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, useWindowDimensions, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colores, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import Pagina2Screen from './Pagina2Screen';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  const {width} = useWindowDimensions();
  console.log(width);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        width >= 700 ? (
          <></>
        ) : (
          <TouchableOpacity>
            <Icon
              name="menu"
              size={30}
              color="black"
              onPress={() => {
                navigation.toggleDrawer();
              }}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
          // <Button
          //   title="Menu"
          //   onPress={() => {
          //     navigation.toggleDrawer();
          //   }}
          // />
        ),
    });
  }, [width]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 screen</Text>

      <Button
        title="Ir a la Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="man" size={40} color="#ff9427" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman" size={40} color={colores.primary} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
