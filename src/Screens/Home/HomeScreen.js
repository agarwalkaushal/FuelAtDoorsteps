/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            diesal: 0.0,
            petrol: 0.0,
        };
    }

    componentDidMount() {
        this.fetchPrices();
    }

    fetchPrices = async () => {
    }

    navigateToCheckoutScreen = () => {
        const { petrol, diesal } = this.state
        this.props.navigation.navigate('Checkout', { petrol: petrol, diesal: diesal })
    }

    render() {
        const { loading, petrol, diesal } = this.state
        return (
            <View style={Styles.screen}>
                {loading ?
                    <ActivityIndicator style={Styles.indicator} color="#000000" /> :
                    <View style={Styles.container}>
                        <Text style={Styles.today}>FUEL PRICES TODAY</Text>
                        <TouchableOpacity style={Styles.priceContainer} onPress={this.navigateToCheckoutScreen}>
                            <Text style={Styles.priceContainerHeading}>Petrol</Text>
                            <View style={Styles.priceRow}>
                                <Text style={Styles.price}>₹{petrol}/- </Text>
                                <Text style={Styles.unit}>per lt.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.priceContainer} onPress={this.navigateToCheckoutScreen}>
                            <Text style={Styles.priceContainerHeading}>Diesal</Text>
                            <View style={Styles.priceRow}>
                                <Text style={Styles.price}>₹{diesal}/- </Text>
                                <Text style={Styles.unit}>per lt.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.checkoutContainer} onPress={this.navigateToCheckoutScreen}>
                            <Text style={Styles.checkoutText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

export default HomeScreen;
