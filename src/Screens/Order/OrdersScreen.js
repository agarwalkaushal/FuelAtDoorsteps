/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Styles } from './Styles'

class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        const { loading } = this.state
        return (
            <View style={Styles.screen}>
                {loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                    <View>
                    </View>
                }
            </View>
        );
    }
}

export default OrdersScreen;
