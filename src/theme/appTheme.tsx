import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856d6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {alignItems: 'center', marginTop: 20},
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuTexto: {
    marginLeft: 10,
    paddingBottom: 3,
    fontSize: 20,
  },
  menuBoton: {
    marginVertical: 10,
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
