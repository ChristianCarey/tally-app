/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GameRoom from '../screens/GameRoom';
import ChatRoom from '../screens/ChatRoom';

export default TabNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    GameRoom: {
      screen: GameRoom,
    },
    ChatRoom: {
      screen: ChatRoom,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Profile':
            iconName = 'user-circle-o';
            break;
          case 'GameRoom':
            iconName = 'bars';
            break;
          case 'ChatRoom':
            iconName = 'comment';
            break;
        }
        return (
          <FontAwesome
            name={iconName}
            size={27}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: true,
    // Don't show the labels
    tabBarOptions: {
      style: {
        backgroundColor: Colors.tabBar,
      },
      showLabel: false,

    },
  }
);
