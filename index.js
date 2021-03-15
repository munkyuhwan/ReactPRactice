/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import BulletinApp from './App2';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BulletinApp);
