import React from 'react';
import { AsyncStorage, View } from 'react-native';

import AuthNavigator from './navigators/AuthNavigator.js';
import HomeNavigator from './navigators/HomeNavigator.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasToken: false };
  }

  componentWillMount() {
    AsyncStorage.getItem('HASURA_AUTH_TOKEN').then((token) => {
      this.setState({ hasToken: token !== null })
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.hasToken &&
          <HomeNavigator />}
        {!this.state.hasToken &&
          <AuthNavigator />}
      </View>
    )
  }
}
