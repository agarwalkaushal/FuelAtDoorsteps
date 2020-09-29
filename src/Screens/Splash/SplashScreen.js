/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, StatusBar, Image, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Styles } from './Styles'
import firestore from '@react-native-firebase/firestore';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
        };
        this.loadUserDetails();
    }

    loadUserDetails = async () => {
        const user = auth().currentUser;
        console.log(user, 'user')
        if (user) {
            const userDetails = await firestore().collection('Users').doc(user.uid).get();
            console.log(userDetails, 'userDetails')
            if (userDetails._data && Object.keys(userDetails._data).length !== 0)
                this.navigateToHome()
            else
                this.navigateToUserFormScreen(user.email, user.phoneNumber, user.uid);
        }
        else
            this.navigateToLoginScreen();
    }

    navigateToUserFormScreen = (email, phoneNumber, uid) => {
        this.props.navigation.navigate('UserFormScreen', { email: email, phoneNumber: phoneNumber, uid: uid });
    }

    navigateToHome = () => {
        this.props.navigation.navigate('TabNavigator')
    }

    navigateToLoginScreen = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return (
            <>
                <StatusBar hidden />
                <View style={Styles.screen}>
                    <Image source={require('../../Images/fuel.png')} style={Styles.image} />
                    <Text style={Styles.name}>FUEL at Doorsteps</Text>
                    <ActivityIndicator style={Styles.indicator} color={'#FFFFFF'} />
                </View>
            </>
        );
    }
}

export default SplashScreen;
