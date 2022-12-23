import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import withAuthfedAuthenticator from '../components/auth/withAuthfedAuthenticator';
import {useAuthenticator} from '@aws-amplify/ui-react-native';
import {Auth} from 'aws-amplify';

const AScreen: React.FC<void> = props => {
  console.log('SCREEN - AScreen');

  const {user, signOut} = useAuthenticator();

  useEffect(() => {
    async function initAsync() {
      try {
        const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        console.log('currentAuthenticatedUser: ', currentAuthenticatedUser);
        const attributes = await Auth.userAttributes(currentAuthenticatedUser);
        console.log('get user attributes successfully', attributes);
      } catch (e) {
        console.log(e);
      }
    }
    initAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AScreen</Text>
      <Button onPress={signOut} title="SIgnOut" />
    </View>
  );
};

export default withAuthfedAuthenticator(AScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 20,
  },
});
