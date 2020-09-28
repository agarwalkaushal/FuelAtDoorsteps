/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import { Styles } from './Styles'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import RazorpayCheckout from 'react-native-razorpay';
import { Buffer } from 'buffer'

class CheckoutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userData: null,
            diesal: props.navigation.getParam('diesal', null),
            petrol: props.navigation.getParam('petrol', null),
            petrolQt: '0',
            diesalQt: '0',
            total: 0,
            isDefault: true,
            address: null,
            paymentProcessing: false,
        };
    }

    getUserAddress = async () => {
        const user = await auth().currentUser;
        const userDetails = await firestore().collection('Users').doc(user.uid).get();
        this.setState({
            userData: userDetails._data,
            loading: false,
        })
    }

    componentDidMount() {
        this.getUserAddress()
    }

    updatePetrol = (qt) => {
        const { petrol, diesal, diesalQt } = this.state
        let petrolTotal, diesalTotal
        if (qt) {
            petrolTotal = petrol * qt
        } else {
            petrolTotal = 0
        }
        if (diesalQt) {
            diesalTotal = diesal * diesalQt
        } else {
            diesalTotal = 0
        }
        this.setState({ total: Math.round(petrolTotal + diesalTotal), petrolQt: qt })
    }

    updateDiesal = (qt) => {
        const { petrol, diesal, petrolQt } = this.state
        let petrolTotal, diesalTotal
        if (qt) {
            diesalTotal = diesal * qt
        } else {
            diesalTotal = 0
        }
        if (petrolQt) {
            petrolTotal = petrol * petrolQt
        } else {
            petrolTotal = 0
        }
        this.setState({ total: Math.round(petrolTotal + diesalTotal), diesalQt: qt })
    }

    getOrderId = () => {
        this.setState({ paymentProcessing: true })
        const { total, userData } = this.state
        if (total === 0) {
            this.setState({ paymentProcessing: false })
            ToastAndroid.show("Order Total cannot be 0", ToastAndroid.SHORT)
            return
        }
        if (isNaN(total)) {
            this.setState({ paymentProcessing: false })
            ToastAndroid.show("Please enter valid quanity", ToastAndroid.SHORT)
            return
        }
        const username = 'rzp_test_IkAVdLiSzXUHlL'
        const password = 'wab2X3AqhaejqPtbteWmOAbA'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        axios.post(
            'https://api.razorpay.com/v1/orders',
            {
                "amount": total * 100,
                "currency": "INR",
            },
            {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Basic ${token}`
                },

            }
        ).then(response => {
            var options = {
                currency: 'INR',
                key: username,
                amount: total * 100,
                name: 'Fuel at Doorsteps',
                order_id: response.id,
                prefill: {
                    email: userData.email,
                    contact: userData.phoneNumber,
                    name: userData.name
                },
                theme: { color: '#2e1c2e' }
            }
            RazorpayCheckout.open(options).then((data) => {
                console.log(data)
                this.props.navigation.navigate('Orders');
            }).catch((error) => {
                alert(`Sorry! Your transaction has failed please try again. Reason ${error.description}`);
                console.log(error)
                this.setState({ paymentProcessing: false })
            });
        }).catch(error => {
            console.log(error)
            this.setState({ paymentProcessing: false })
        });;
    }

    render() {
        const { loading, petrol, diesal, petrolQt, diesalQt, total, userData, isDefault, address, paymentProcessing } = this.state
        return (
            <View>
                <View style={Styles.screen}>
                    {loading ?
                        <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                        <View style={Styles.container}>
                            <View style={Styles.priceHeader}>
                                <Text style={Styles.fuel}>PETROL: ₹{petrol}/-</Text>
                                {/* <View style={Styles.fuel}></View> */}
                                <Text style={Styles.fuel}>DIESAL: ₹{diesal}/-</Text>
                            </View>

                            <ScrollView style={Styles.margin}>
                                <View style={Styles.quantityRow}>
                                    <Text style={Styles.quantityText}>Petrol quantity</Text>
                                    <TextInput
                                        style={Styles.quantityField}
                                        value={petrolQt}
                                        keyboardType={'numeric'}
                                        onChangeText={qt => this.updatePetrol(qt)} />
                                    <Text style={Styles.ltText}>lt.</Text>
                                </View>
                                <View style={Styles.quantityRow}>
                                    <Text style={Styles.quantityText}>Diesal quantity</Text>
                                    <TextInput
                                        style={Styles.quantityField}
                                        value={diesalQt}
                                        keyboardType={'numeric'}
                                        onChangeText={qt => this.updateDiesal(qt)} />
                                    <Text style={Styles.ltText}>lt.</Text>
                                </View>
                                <View style={Styles.orderRow}>
                                    <Text style={Styles.orderText}>ORDER TOTAL</Text>
                                    <Text style={Styles.orderAmount}>₹{total}/-</Text>
                                </View>

                                <View>
                                    <Text style={Styles.addressText}>Use your saved address</Text>
                                    <View style={Styles.addressRow}>
                                        <Text style={Styles.address}>{userData.address}</Text>
                                        <CheckBox
                                            disabled={false}
                                            value={isDefault}
                                            tintColors={{ true: '#2e1c2e', false: 'gray' }}
                                            onValueChange={text => this.setState({ isDefault: text })} />
                                    </View>
                                    <Text style={Styles.addressNew}>- or enter new -</Text>
                                    <TextInput
                                        style={Styles.addressField}
                                        value={address}
                                        autoCapitalize={'sentences'}
                                        onFocus={() => this.setState({ isDefault: false })}
                                        onChangeText={text => this.setState({ address: text })} />
                                </View>
                            </ScrollView>
                            {paymentProcessing ?
                                <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                                <TouchableOpacity style={Styles.payContainer} onPress={this.getOrderId}>
                                    <Text style={Styles.payText}>Pay Now</Text>
                                </TouchableOpacity>}
                        </View>
                    }
                </View>
            </View>
        );
    }
}

export default CheckoutScreen;
