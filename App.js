import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './screens/auth/Login.js';
import Signup from './screens/auth/Signup.js';
import LoginEmail from './screens/auth/LoginEmail.js';
import SignupEmail from './screens/auth/SignupEmail.js';
import Fpass from './screens/auth/Fpass.js';
import Home from './Home.js'

const commonNavOps = {
  header: null,
  gesturesEnabled: true,
};

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: commonNavOps,
  },
  Signup: {
    screen: Signup,
    navigationOptions: commonNavOps,
  },
  LoginEmail: {
    screen: LoginEmail,
    navigationOptions: commonNavOps,
  },
  SignupEmail: {
    screen: SignupEmail,
    navigationOptions: commonNavOps,
  },
  Fpass: {
    screen: Fpass,
    navigationOptions: commonNavOps,
  }
});

export default Home
