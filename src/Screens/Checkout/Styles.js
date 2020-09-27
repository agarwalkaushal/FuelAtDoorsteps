import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/colors'
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: COLORS.white,
            width: '100%',
            height: '100%',
        },

        loadingIndicator: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },

        container: {
            width: '100%',
            height: '100%',
        },

        priceHeader: {
            flexDirection: 'row',
            position: 'absolute',
            top: 0,
            height: verticalScale(45),
            width: '100%',
            backgroundColor: COLORS.offWhite,
        },

        fuel: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: scale(12),
            fontWeight: 'bold',
        },

        margin: {
            marginTop: verticalScale(65),
            marginHorizontal: scale(15),
        },

        quantityRow: {
            flexDirection: 'row',
            marginBottom: verticalScale(20),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        quantityText: {
            flex: .7,
            fontSize: scale(16),
        },

        quantityField: {
            flex: .2,
            borderWidth: scale(1),
            borderRadius: scale(5),
            borderColor: COLORS.primaryLight,
            color: COLORS.primaryLight,
            fontSize: scale(14),
            fontWeight: 'bold',
        },

        ltText: {
            marginLeft: scale(5),
            fontSize: scale(14),
            flex: .1,
        },

        orderRow: {
            flexDirection: 'row',
            marginTop: verticalScale(10),
            marginBottom: verticalScale(30),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        
        orderText: {
            fontSize: scale(16),
            fontWeight: 'bold',
            flex: .7,
        },

        orderAmount: {
            fontSize: scale(16),
            fontWeight: 'bold',
            flex: .3,
        },

        addressText: {
            fontSize: scale(14),
        },

        addressRow: {
            marginVertical: verticalScale(10),
            flexDirection: 'row',
            alignItems: 'center',
        },

        address: {
            fontSize: scale(16),
            fontWeight: 'bold',
            flex: .8,
        },

        addressNew: {
            textAlign: 'center',
            marginVertical: verticalScale(10),
        },

        addressField: {
            borderBottomWidth: scale(1),
            borderRadius: scale(5),
            borderColor: COLORS.primaryLight,
            color: COLORS.primaryLight,
            fontSize: scale(15),
            fontWeight: 'bold',
        },

        payContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: verticalScale(45),
            backgroundColor: COLORS.offWhite,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4,
            marginTop: verticalScale(10),
        },

        payText: {
            fontSize: scale(16),
            color: COLORS.primaryDark,
            fontWeight: 'bold',
        },

    }
);