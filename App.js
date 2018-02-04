import React from 'react';
import { AsyncStorage } from 'react-native';

import AuthNavigator from './navigators/AuthNavigator.js';
import HomeNavigator from './navigators/HomeNavigator.js';

var auth_token = AsyncStorage.getItem('HASURA_AUTH_TOKEN');
bool = auth_token!=null;
const toOpen =  false ? HomeNavigator : AuthNavigator;

export default toOpen
