import React from 'react';
import {Auth} from 'aws-amplify';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react-native';
import {FederatedProviderButtons} from '@aws-amplify/ui-react-native/dist/Authenticator/common';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';

const withAuthfedAuthenticator = App => {
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
    },
  });
};

export default withAuthfedAuthenticator;
