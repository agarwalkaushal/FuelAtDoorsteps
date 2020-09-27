/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, TextInput, View, Text, ActivityIndicator, StatusBar, ToastAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';
import { Styles } from './Styles'

class UserFormScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: props.navigation.getParam('uid', null),
            submittingForm: false,
            name: null,
            industry: null,
            address: null,
            phoneNumber: props.navigation.getParam('phoneNumber', null),
            email: props.navigation.getParam('email', null),
            daily: true,
            validated: false,
        };
    }

    navigateToHome = () => {
        this.props.navigation.navigate('TabNavigator')
    }

    postData = () => {
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
                ToastAndroid.show('Details saved successfully', ToastAndroid.SHORT);
                this.navigateToHome();
            });
    }

    submitField = () => {
        const { name, industry, email, phoneNumber } = this.state;
        let errorMsg = '';

        if (phoneNumber && phoneNumber.length != 10 && phoneNumber.length != 13) {
            errorMsg = 'Please enter valid Phone number';
            ToastAndroid.show(errorMsg, ToastAndroid.SHORT);
            return;
        }

        //TODO: Validate email

        if (name && industry && email && phoneNumber) {
            this.setState({ validated: true }, () => this.postData());
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

        }
    }

    render() {
        const { validated, submittingForm, email, phoneNumber, daily } = this.state
        return (
            <>
                <StatusBar hidden />
                <View style={Styles.screen}>
                    <Text style={Styles.formText}>We just need few more details</Text>
                    <View style={Styles.form}>
                        <View style={Styles.formRow}>
                            <View style={Styles.formElement}>
                                <Text style={Styles.heading}>NAME/ COMPANY NAME</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="sentences"
                                    onChangeText={text => this.setState({ name: text })} />
                            </View>
                            <View style={Styles.formElement}>
                                <Text style={Styles.heading}>INDUSTRY</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="sentences"
                                    onChangeText={text => this.setState({ industry: text })} />
                            </View>
                        </View>
                        <View style={Styles.formRow}>
                            <View style={Styles.formElement}>
                                <Text style={Styles.heading}>ADDRESS</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="sentences"
                                    onChangeText={text => this.setState({ address: text })} />
                            </View>
                        </View>
                        <View style={Styles.formRow}>
                            <View style={Styles.formElement}>
                                <Text style={Styles.heading}>EMAIL</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="sentences"
                                    value={email}
                                    onChangeText={text => this.setState({ email: text })} />
                            </View>
                        </View>
                        <View style={Styles.formRow}>
                            <View style={Styles.formElement}>
                                <Text style={Styles.heading}>PHONE NUMBER</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="sentences"
                                    value={phoneNumber}
                                    keyboardType={'numeric'}
                                    onChangeText={text => this.setState({ phoneNumber: text })} />
                            </View>
                        </View>
                        <View style={Styles.formRow}>
                            <CheckBox
                                disabled={false}
                                value={daily}
                                onValueChange={text => this.setState({ daily: text })} />
                            <Text style={Styles.requirement}>Opt for Daily requirement</Text>
                        </View>
                    </View>
                    <View style={Styles.button}>
                        {!submittingForm ?
                            <Button
                                title='SUBMIT'
                                color="#735fbe"
                                onPress={this.submitField}
                                disabled={validated}
                            /> :
                            <ActivityIndicator size="small" color="#D3D3D3" />}
                    </View>
                </View>
            </>
        );
    }
}

export default UserFormScreen;