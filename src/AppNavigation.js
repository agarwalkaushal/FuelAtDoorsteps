/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { scale } from '../src/Utils/responsiveScaling'
import { COLORS } from './Utils/colors'
import SplashScreen from './Screens/Splash/SplashScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import UserFormScreen from './Screens/Form/UserFormScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import OrdersScreen from './Screens/Order/OrdersScreen';
import CheckoutScreen from './Screens/Checkout/CheckoutScreen';
import SettingsScreen from './Screens/Settings/SettingsScreen';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            //Set icon here in navigationoptions
        },
        Orders: {
            screen: OrdersScreen,
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: COLORS.primaryLight,
            inactiveTintColor: COLORS.gray,
            indicatorStyle: {
                backgroundColor: COLORS.primaryLight,
            },
            style: {
                backgroundColor: COLORS.white,
            },
            // showIcon: true, For icons
        },
        animationEnabled: true,
    },
);

TabNavigator.navigationOptions = ({ navigation }) => ({
    headerRight: () =>
        <React.Fragment>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image source={require('../src/Images/settings.png')} style={{ width: scale(20), height: scale(20), marginRight: scale(10) }} />
            </TouchableOpacity>
        </React.Fragment>
})

const HomeScreenNavigator = createStackNavigator(
    {
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                headerTitle: 'Fuel at Doorsteps',
                headerStyle: {
                    backgroundColor: COLORS.secondaryColor,
                },
                headerTintColor: COLORS.white,
            },
        },

        Checkout: CheckoutScreen,
        Settings: SettingsScreen,
    },

    {
        initialRouteName: 'TabNavigator',
    },
)


const RootStack = createSwitchNavigator(
    {
        SplashScreen: SplashScreen,
        LoginScreen: LoginScreen,
        UserFormScreen: UserFormScreen,
        HomeScreenNavigator: HomeScreenNavigator,
    },
    {
        initialRouteName: 'SplashScreen',
    }
);

export default createAppContainer(RootStack);
