import React, {useContext} from 'react';

import {FunctionComponent} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

interface ContactScreenProps {}

const ContactScreen: FunctionComponent<ContactScreenProps> = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {!isLoggedIn && <Button title="SignIn" onPress={() => signIn()}></Button>}
    </View>
  );
};

export default ContactScreen;
