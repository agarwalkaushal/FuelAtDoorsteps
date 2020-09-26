/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import SplashScreen from './Screens/Splash/SplashScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import UserFormScreen from './Screens/Form/UserFormScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import OrdersScreen from './Screens/Order/OrdersScreen'
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

const OrdersStack = createStackNavigator(
    {
        Orders: {
            screen: OrdersScreen,
        },
    },
    {
        initialRouteName: 'Orders',
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
                        source={require('./Images/fuel.png')}
                        style={{ width: 25, height: 25, tintColor: tintColor }}
                    />
                ),
            },
        },
        Orders: {
            screen: OrdersStack,
            navigationOptions: {
                tabBarLabel: 'Orders',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./Images/list.png')}
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
