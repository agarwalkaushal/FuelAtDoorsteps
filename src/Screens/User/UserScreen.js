/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View, Text, StyleSheet, ToastAndroid, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { Styles } from './Styles'
import ImagePicker from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import RNFetchBlob from 'rn-fetch-blob';
import rnfs from 'react-native-fs';

class UserScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profilePicture: null,
            userDetails: null,
            pNo: null,
            url: null,
            loading: true,
        };
        this.signOutUser = this.signOutUser.bind(this);
    }

    getUserDetails = async () => {
        /* To Do */
    }

    componentWillMount() {
        this.getUserDetails();
    }

    navigateToSplashScreen = () => {
        this.props.navigation.navigate('SplashScreen');
        ToastAndroid.show('Logged off successfully', ToastAndroid.SHORT);
    }

    async signOutUser() {
        this.navigateToSplashScreen();
        auth().signOut();
    }

    render() {
        return (
            <View style={Styles.screen}>
                {this.state.loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                    <TouchableOpacity style={Styles.signOut} onPress={() => this.signOutUser()}>
                        <Text>SIGN OUT</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

export default UserScreen;
