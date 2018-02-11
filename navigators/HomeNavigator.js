import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import VoteTab from '../screens/home/VoteTab.js';
import Pop from '../screens/home/Pop.js';

import NominateTab from '../screens/home/NominateTab.js';
import Npop from '../screens/home/Npop.js';

import ResultsTab from '../screens/home/ResultsTab.js';
import Rpop from '../screens/home/Rpop.js';

import UserInfo from '../screens/home/UserInfo.js';

const PopNavigator = StackNavigator({
  VoteList: {
    screen: VoteTab,
  },
  Pop: {
    screen: Pop,
  }
},
{
  headerMode: 'none',
});

const RpopNavigator = StackNavigator({
  ResultsList: {
    screen: ResultsTab,
  },
  RPop: {
    screen: Rpop,
  }
},
{
  headerMode: 'none',
});

const NpopNavigator = StackNavigator({
  NomsList: {
    screen: NominateTab,
  },
  NPop: {
    screen: Npop,
  }
},
{
  headerMode: 'none',
});

const HomeNavigator = TabNavigator({
  VoteTab: {
    screen: PopNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="check" size={25} color='#ffffff'/>,
      tabBarLabel: 'Vote',
    }
  },
  NominateTab: {
    screen: NpopNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="hand-paper-o" size={25} color='#ffffff'/>,
      tabBarLabel: 'Nominate'
    }
  },
  ResultsTab: {
    screen: RpopNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="trophy" size={25} color='#ffffff'/>,
      tabBarLabel: 'Results'
    }
  },
  UserInfo: {
    screen: UserInfo,
    navigationOptions: {
      tabBarIcon: <Icon name="user" size={25} color='#ffffff'/>,
      tabBarLabel: 'You'
    }
  },
},
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: "#041941",
    },
    activeTintColor: "#ffffff",
    inactiveTintColor: "#9fa3d2",
    activeBackgroundColor: '#3338C9',
    inactiveBackgroundColor: '#041941',
  }
});

export default HomeNavigator
