import React from 'react';
import {Auth} from 'aws-amplify';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react-native';
import {FederatedProviderButtons} from '@aws-amplify/ui-react-native/dist/Authenticator/common';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {Text} from 'react-native';

const withAuthfedAuthenticator = App => {
  const formFields = {
    signUp: {
      name: {
        placeholder: 'AAAAAAAAAA',
        // isRequired: true,
        label: 'Email:',
      },
    },
  };

  return withAuthenticator(App, {
    components: {
      SignIn: ({fields, ...props}) => (
        <>
          <FederatedProviderButtons
            socialProviders={['google', 'facebook']}
            toFederatedSignIn={provider => {
              console.log('prov: ', provider);
              Auth.federatedSignIn({
                provider:
                  provider.provider === 'google'
                    ? CognitoHostedUIIdentityProvider.Google
                    : CognitoHostedUIIdentityProvider.Facebook,
              });
            }}
          />

          <Authenticator.SignIn
            {...props}
            fields={fields.map(field => ({...field, isRequired: true}))}
            Header={() => {}}
          />
        </>
      ),
      // SignUp: ({fields, ...props}) => {
      //   <Authenticator.SignUp
      //     {...props}
      //     fields={fields.map(f => {
      //       if (f.name === 'name') {
      //         console.log('name');
      //         return {
      //           ...f,
      //         };
      //       } else {
      //         return f;
      //       }
      //     })}
      //     Header={() => {
      //       <Text>AAAAAAAAAAAAA</Text>;
      //     }}
      //   />;
      // },
    },
  });
};

export default withAuthfedAuthenticator;
