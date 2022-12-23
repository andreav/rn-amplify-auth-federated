# Create react native project

    npx react-native init authfed --template react-native-template-typescript
    cd authfed

# amplify init

    $ amplify init
    Note: It is recommended to run this command from the root of your app directory
    ? Enter a name for the project authfed
    The following configuration will be applied:

    Project information
    | Name: authfed
    | Environment: dev
    | Default editor: Visual Studio Code
    | App type: javascript
    | Javascript framework: react-native
    | Source Directory Path: src
    | Distribution Directory Path: /
    | Build Command: npm.cmd run-script build
    | Start Command: npm.cmd run-script start

    ? Initialize the project with the above configuration? Yes
    Using default provider  awscloudformation
    ? Select the authentication method you want to use: AWS profile

    For more information on AWS Profiles, see:
    https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

    ? Please choose the profile you want to use strangersinthecloud
    Adding backend environment dev to AWS Amplify app: d2i4kkt683dyn7

# amplify auth

# amplify-ui

refs - https://ui.docs.amplify.aws/react-native/getting-started/installation

    npm i @aws-amplify/ui-react-native aws-amplify react-native-safe-area-context amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values react-native-url-polyfill

    import 'react-native-url-polyfill/auto';
    import 'react-native-get-random-values';
