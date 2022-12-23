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

    $ amplify add auth
    Using service: Cognito, provided by: awscloudformation

    The current configured provider is Amazon Cognito.

    Do you want to use the default authentication and security configuration? Manual configuration
    Select the authentication/authorization services that you want to use: User Sign-Up & Sign-In only (Best used with a cloud API only)
    Provide a friendly name for your resource that will be used to label this category in the project: authfedAuth
    Provide a name for your user pool: authfedUserPool
    Warning: you will not be able to edit these selections.
    How do you want users to be able to sign in? Username
    Do you want to add User Pool Groups? Yes
    ? Provide a name for your user pool group: Admin
    ? Do you want to add another User Pool Group Yes
    ? Provide a name for your user pool group: User
    ? Do you want to add another User Pool Group Yes
    ? Provide a name for your user pool group: BlackList
    ? Do you want to add another User Pool Group No
    √ Sort the user pool groups in order of preference · Admin, User, BlackList
    Do you want to add an admin queries API? No
    Multifactor authentication (MFA) user login options: OFF
    Email based user registration/forgot password: Enabled (Requires per-user email entry at registration)
    Specify an email verification subject: Your verification code
    Specify an email verification message: Your verification code is {####}
    Do you want to override the default password policy for this User Pool? No
    Warning: you will not be able to edit these selections.
    What attributes are required for signing up? Email, Name
    Specify the app's refresh token expiration period (in days): 30
    Do you want to specify the user attributes this app can read and write? No
    Do you want to enable any of the following capabilities? Add User to Group
    Do you want to use an OAuth flow? Yes
    What domain name prefix do you want to use? authfeddomain
    Enter your redirect signin URI: authfed://
    ? Do you want to add another redirect signin URI No
    Enter your redirect signout URI: authfed://
    ? Do you want to add another redirect signout URI No
    Select the OAuth flows enabled for this project. Authorization code grant
    Select the OAuth scopes enabled for this project. Phone, Email, OpenID, Profile, aws.cognito.signin.user.admin
    Select the social providers you want to configure for your user pool: Facebook, Google

    You've opted to allow users to authenticate via Facebook.  If you haven't already, you'll need to go to https://developers.facebook.com and create an App ID.

    Enter your Facebook App ID for your OAuth flow:  2340136472812066
    Enter your Facebook App Secret for your OAuth flow:  xxxxxxxxxx

    You've opted to allow users to authenticate via Google.  If you haven't already, you'll need to go to https://developers.google.com/identity and create an App ID.

    Enter your Google Web Client ID for your OAuth flow:  869797328317-l522qnji2j9c0uvn2n8ivj1vs1246u7n.apps.googleusercontent.com
    Enter your Google Web Client Secret for your OAuth flow:  xxxxxxxxxx
    ? Do you want to configure Lambda Triggers for Cognito? Yes
    ? Which triggers do you want to enable for Cognito Post Confirmation
    ? What functionality do you want to use for Post Confirmation Add User To Group
    √ Enter the name of the group to which users will be added. · User
    Successfully added resource authfedAuthPostConfirmation locally.

    Next steps:
    Check out sample function code generated in <project-dir>/amplify/backend/function/authfedAuthPostConfirmation/src
    "amplify function build" builds all of your functions currently in the project
    "amplify mock function <functionName>" runs your function locally
    To access AWS resources outside of this Amplify app, edit the C:\Workspace\SW\Mobile\authfed\amplify\backend\function\authfedAuthPostConfirmation\custom-policies.json
    "amplify push" builds all of your local backend resources and provisions them in the cloud
    "amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
    Successfully added the Lambda function locally
    ? Do you want to edit your add-to-group function now? Yes
    Edit the file in your editor: C:\Workspace\SW\Mobile\authfed\amplify\backend/function/authfedAuthPostConfirmation/src/add-to-group.js
    ? Press enter to continue
    ✅ Successfully added auth resource authfedAuth locally

    ✅ Some next steps:
    "amplify push" will build all your local backend resources and provision it in the cloud
    "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

# amplify-ui

refs - https://ui.docs.amplify.aws/react-native/getting-started/installation

    npm i @aws-amplify/ui-react-native aws-amplify react-native-safe-area-context amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values react-native-url-polyfill

    import 'react-native-url-polyfill/auto';
    import 'react-native-get-random-values';

# configure identity providers

ref - https://docs.amplify.aws/lib/auth/social/q/platform/react-native/#setup-your-auth-provider

# Add deep link

Inside AndroidManifest:

        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="authfed" />
        </intent-filter>

_Note:_ after social login the page will not change (need more configuration to work as expected but this is just a demo). While in debugging, refresh teh app and "AScreen" will appear. You are logged in.
