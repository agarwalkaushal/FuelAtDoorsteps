/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, TextInput, View, Text, ActivityIndicator, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import { Styles } from './Styles'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import firestore from '@react-native-firebase/firestore';

GoogleSignin.configure({
    webClientId: '710089797869-n505ogokkg9im6l3e1nlm85e087p3cl5.apps.googleusercontent.com',
});

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigninInProgress: false,
            number: null,
            otpView: false,
        };
    }

    getUserDetails = async (user) => {
        const userDetails = await firestore().collection('Users').doc(user.uid).get();
        if (userDetails._data && Object.keys(userDetails._data).length !== 0)
            this.navigateToHome()
        else
            this.navigateToUserFormScreen(user.email, user.phoneNumber, user.uid);
    }

    componentWillMount() {
        this.unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                this.getUserDetails(user)
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    navigateToUserFormScreen = (email, phoneNumber, uid) => {
        this.props.navigation.navigate('UserFormScreen', { email: email, phoneNumber: phoneNumber, uid: uid });
    }

    navigateToHome = () => {
        this.props.navigation.navigate('TabNavigator')
    }

    googleSignIn = async () => {
        this.setState({ isSigninInProgress: true })
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error.code)
        }
    }

    phoneSignIn = async () => {
        this.setState({ isSigninInProgress: true })
        try {
            const confirmation = await auth().signInWithPhoneNumber('+91' + this.state.number);
            this.setState({ confirm: confirmation, verficationId: confirmation._verificationId, isSigninInProgress: false, otpView: true })
        } catch (error) {
            console.log(error.code)
        }
    }

    confirmCode = async () => {
        const { confirm, code } = this.state
        this.setState({ confirmingCode: true })
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log(error.code)
        }
    }

    render() {
        const { otpView, isSigninInProgress, number, confirmingCode, code } = this.state
        return (
            <>
                <StatusBar hidden />
                <View style={Styles.screen}>
                    <Text style={Styles.appName}>LOG IN</Text>
                    {/* <Text style={Styles.signText}>To proceed either use you Google account or Phone number</Text> */}
                    {!otpView &&
                        <>
                            <GoogleSigninButton
                                style={Styles.googleSignIn}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Light}
                                onPress={this.googleSignIn}
                                disabled={isSigninInProgress} />

                            <Text style={Styles.or}>- or -</Text>

                            <TextInput
                                style={Styles.phoneInput}
                                value={number}
                                keyboardType={'numeric'}
                                onChangeText={text => this.setState({ number: text })}
                                placeholder="Your Phone number"
                                placeholderTextColor="#808080"
                            />
                            <View style={Styles.button}>
                                {!isSigninInProgress ?
                                    <Button
                                        title="GET OTP"
                                        color="#735fbe"
                                        onPress={this.phoneSignIn}
                                        disabled={number ? (number.length !== 10 ? true : false) : true}
                                    /> :
                                    <ActivityIndicator size="small" color="#D3D3D3" />}
                            </View>
                        </>
                    }

                    {otpView &&
                        <View style={Styles.otpView}>
                            <OTPInputView
                                style={Styles.otpInputView}
                                pinCount={6}
                                onCodeChanged={text => this.setState({ code: text })}
                                autoFocusOnLoad
                                codeInputFieldStyle={Styles.underlineStyleBase}
                                codeInputHighlightStyle={Styles.underlineStyleHighLighted}
                            />
                            <View style={Styles.button}>
                                {!confirmingCode ?
                                    <Button
                                        title="Confirm Code"
                                        color="#735fbe"
                                        onPress={this.confirmCode}
                                        disabled={code ? (code.length !== 6 ? true : false) : true}
                                    /> :
                                    <ActivityIndicator size="small" color="#D3D3D3" />}
                            </View>
                        </View>
                    }
                    {//TODO: Resend otp, chang number, error scenario
}
                    <View style={Styles.tcContainer}>
                        <Text style={Styles.tcText}>By signing in you agree to our </Text>
                        <Text style={Styles.tcLinkText}>Terms &amp; Conditions</Text>
                    </View>
                </View>
            </>
        );
    }
}

export default LoginScreen;