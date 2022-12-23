/**
 * @format
 */
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports'; // if you are using Amplify CLI

Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);
