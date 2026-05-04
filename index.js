/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Encountered two children with the same key']);


AppRegistry.registerComponent(appName, () => App);
