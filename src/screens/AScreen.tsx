import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import withAuthfedAuthenticator from '../components/auth/withAuthfedAuthenticator';

const AScreen: React.FC<void> = props => {
  console.log('SCREEN - AScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AScreen</Text>
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
    color: 'black',
  },
});
