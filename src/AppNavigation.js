/* eslint-disable prettier/prettier */
import SplashScreen from './Screens/Splash/SplashScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import UserFormScreen from './Screens/Form/UserFormScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import OrdersScreen from './Screens/Order/OrdersScreen';
import CheckoutScreen from './Screens/Checkout/CheckoutScreen';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { COLORS } from './Utils/colors'

const TabNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: HomeScreen,
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
            }
        },
        animationEnabled: true,
    },
);


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
