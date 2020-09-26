/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import SplashScreen from './Screens/Splash/SplashScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import UserFormScreen from './Screens/Form/UserFormScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import UserScreen from './Screens/User/UserScreen'
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const UserStack = createStackNavigator(
    {
        Profile: {
            screen: UserScreen,
        },
    },
    {
        initialRouteName: 'Profile',
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        // source={require('./Images/lead.png')}
                        style={{ width: 25, height: 25, tintColor: tintColor }}
                    />
                ),
            },
        },
        User: {
            screen: UserStack,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        // source={require('./Images/user.png')}
                        style={{ width: 25, height: 25, tintColor: tintColor }}
                    />
                ),
            },
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#332033',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
    },
);

const RootStack = createSwitchNavigator(
    {
        SplashScreen: SplashScreen,
        LoginScreen: LoginScreen,
        UserFormScreen: UserFormScreen,
        TabNavigator: TabNavigator,
    },
    {
        initialRouteName: 'SplashScreen',
    }
);

export default createAppContainer(RootStack);
