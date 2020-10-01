/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator, Image, Text, FlatList, SectionList } from 'react-native';
import { scale } from '../../Utils/responsiveScaling';
import { Styles } from './Styles'

class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [{
                "id": 2,
                "status": "Past",
                "petrolQuantity": 15,
                "dieselQuantity": 12,
                "totalAmount": 1728.0,
                "name": "kunal",
                "email": "testing",
                "order_id": "1234"
            },
            {
                "id": 3,
                "status": "Active",
                "petrolQuantity": 15,
                "dieselQuantity": 12,
                "totalAmount": 1728.0,
                "name": "kunal",
                "email": "testing",
                "order_id": "1234"
            },
            {
                "id": 4,
                "status": "Past",
                "petrolQuantity": 15,
                "dieselQuantity": 12,
                "totalAmount": 1728.0,
                "name": "kunal",
                "email": "testing",
                "order_id": "1234"
            },
            {
                "id": 5,
                "status": "Past",
                "petrolQuantity": 15,
                "dieselQuantity": 12,
                "totalAmount": 1728.0,
                "name": "kunal",
                "email": "testing",
                "order_id": "1234"
            }],
            formattedData: null,
        };
    }

    componentDidMount() {
        const { data } = this.state
        let activeOrders = [], pastOrders = []

        if (data.length > 0) {
            data.forEach(element => {
                if (element.status === 'Active') {
                    activeOrders.push(element)
                }
                else {
                    pastOrders.push(element)
                }
            });
        }

        const formattedData = [
            {
                title: 'ACTIVE ORDERS',
                data: activeOrders,
            },
            {
                title: 'PAST ORDERS',
                data: pastOrders,
            }
        ]

        this.setState({
            formattedData: formattedData,
            loading: false,
        })
    }



    render() {
        const { loading, formattedData } = this.state
        return (
            <View style={Styles.screen}>
                {loading ?
                    <ActivityIndicator style={Styles.loadingIndicator} color="#000000" /> :
                    <>
                        {formattedData.length > 0 ?
                            <SectionList
                                sections={formattedData}
                                renderSectionHeader={({ section: { title } }) => (
                                    <View style={Styles.orderHeader}>
                                        <Text style={Styles.orderText}>{title}</Text>
                                    </View>
                                )}
                                renderItem={({ item }) => <Item data={item} />}
                            /> :
                            <View style={Styles.emptyScreen}>
                                <Image source={require('../../Images/fuel_empty.png')} style={Styles.emptyImage} />
                                <Text style={Styles.emptyText}>Looks empty here</Text>
                            </View>

                        }
                    </>
                }
            </View>
        );
    }
}

function Item(props) {
    return (
        <View style={Styles.orderContainer}>
            <View style={Styles.itemRow}>
                <Text style={Styles.itemTitle}>Order ID</Text>
                <Text style={Styles.itemValue}>{props.data.order_id}</Text>
            </View>
            <View style={Styles.itinerariesContainer}>
                <Text style={Styles.itemTitle}>Itineraries</Text>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemSubTitle}>Petrol Qt.</Text>
                    <Text style={Styles.itemValue}>{props.data.petrolQuantity}</Text>
                </View>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemSubTitle}>Diesal Qt.</Text>
                    <Text style={Styles.itemValue}>{props.data.dieselQuantity}</Text>
                </View>
            </View>
            <View style={Styles.itemRow}>
                <Text style={Styles.itemTitle}>Amount </Text>
                <Text style={Styles.itemValue}>₹{props.data.totalAmount}/-</Text>
            </View>
            <View style={{ marginBottom: scale(7.5) }}></View>
            <View style={Styles.itemRow}>
                <Text style={Styles.itemTitle}>Placed on </Text>
                <Text style={Styles.itemValue}>{String(new Date().getDate()) + '/' + String(new Date().getMonth() + 1) + '/' + String(new Date().getFullYear() + 1)}</Text>
            </View>
        </View>
    );
}

export default OrdersScreen;
