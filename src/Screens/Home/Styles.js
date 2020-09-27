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

        indicator: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },

        today: {
            marginHorizontal: scale(15),
            marginVertical: verticalScale(15),
            fontSize: scale(15),
        },

        priceContainer: {
            marginHorizontal: scale(15),
            marginBottom: verticalScale(15),
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            borderWidth: scale(1),
            borderColor: COLORS.primaryLight,
            borderRadius: verticalScale(5),
        },

        priceContainerHeading: {
            fontSize: scale(16),
            fontWeight: 'bold',
        },

        priceRow: {
            marginTop: verticalScale(10),
            flexDirection: 'row',
        },

        price: {
            fontSize: scale(34),
            lineHeight: verticalScale(40),
        },

        unit: {
            fontSize: scale(16),
            lineHeight: verticalScale(40),
        },

        checkoutContainer: {
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

        checkoutText: {
            fontSize: scale(16),
            color: COLORS.primaryDark,
            fontWeight: 'bold',
        },

    }
);