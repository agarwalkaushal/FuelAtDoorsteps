/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Styles } from './Styles'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class CheckoutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            diesal: props.navigation.getParam('diesal', null),
            petrol: props.navigation.getParam('petrol', null),
        };
    }

    getUserAddress = async () => {
        const user = await auth().currentUser;
        const userDetails = await firestore().collection('Users').doc(user.uid).get();
        const address = userDetails._data.address
        this.setState({
            address: address,
            loading: false,
        })
    }

    componentDidMount() {
        this.getUserAddress()
    }

    render() {
        const { loading, petrol, diesal } = this.state
        return (
            <View style={Styles.screen}>
                {loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                    <View style={Styles.container}>
                        <View style={Styles.priceHeader}>
                            <Text style={Styles.fuel}>PETROL: ₹{petrol}/-</Text>
                            {/* <View style={Styles.fuel}></View> */}
                            <Text style={Styles.fuel}>DIESAL: ₹{diesal}/-</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

export default CheckoutScreen;
