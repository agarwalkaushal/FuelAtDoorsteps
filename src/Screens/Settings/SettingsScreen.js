/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, TextInput, View, Text, ActivityIndicator, StatusBar, ToastAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';
import { Styles } from './Styles'

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        };
    }

    signOut = () => {
    }

    updateData = () => {
        const { name, industry, email, phoneNumber, daily, address } = this.state;
        this.setState({ submittingForm: true });
        firestore()
            .collection('Users')
            .doc(this.state.uid)
            .set({
                name: name,
                industry: industry,
                email: email,
                phoneNumber: phoneNumber,
                daily: daily,
                address: address,
            })
            .then(() => {
                ToastAndroid.show('Details updated successfully', ToastAndroid.SHORT);
            });
    }

    submitFields = () => {
        const { name, industry, email, phoneNumber, address } = this.state;
        let errorMsg = '';

        if (phoneNumber && phoneNumber.length != 10 && phoneNumber.length != 13) {
            errorMsg = 'Please enter valid Phone number';
            ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
            return;
        }

        //TODO: Validate email

        if (name && industry && email && phoneNumber && address) {
            this.setState({ validated: true }, () => this.updateData());
        } else {
            if (!name) {
                errorMsg = 'Name cannot be empty';
                ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
                return;
            }

            if (!industry) {
                errorMsg = 'Industry cannot be empty';
                ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
                return;
            }

            if (!email) {
                errorMsg = 'Email cannot be empty';
                ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
                return;
            }

            if (!phoneNumber) {
                errorMsg = 'Phone number cannot be empty';
                ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
                return;
            }

            if (!address) {
                errorMsg = 'Address cannot be empty';
                ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
                return;
            }

        }
    }

    render() {
        const { userData } = this.state
        return (
            <View style={Styles.screen}>
            </View>
        );
    }
}

export default SettingsScreen;