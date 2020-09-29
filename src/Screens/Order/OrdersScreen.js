/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, Image, Text } from 'react-native';
import { Styles } from './Styles'

class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
        };
    }

    render() {
        const { loading, data } = this.state
        return (
            <View style={Styles.screen}>
                {loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                    <>
                        {data.length === 0 ?
                            <View style={Styles.emptyScreen}>
                                <Image source={require('../../Images/fuel_empty.png')} style={Styles.emptyImage} />
                                <Text style={Styles.emptyText}>Looks empty here</Text>
                            </View> :
                            <>
                            </>
                        }
                    </>
                }
            </View>
        );
    }
}

export default OrdersScreen;
