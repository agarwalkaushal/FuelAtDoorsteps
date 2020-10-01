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

        emptyScreen: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
        },

        emptyImage: {
            marginTop: verticalScale(-50),
            width: scale(60),
            height: scale(60),
            alignSelf: 'center',
        },

        emptyText: {
            marginTop: verticalScale(25),
            fontWeight: 'bold',
            fontSize: scale(16),
            color: COLORS.primaryLight,
            alignSelf: 'center',
        },


        orderHeader: {
            height: verticalScale(45),
            width: '100%',
            backgroundColor: COLORS.offWhite,
            justifyContent: 'center',
        },

        orderText: {
            marginLeft: scale(10),
            fontSize: scale(12),
            fontWeight: 'bold',
        },

        orderContainer: {
            marginHorizontal: scale(10),
            marginVertical: verticalScale(10),
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(10),
            borderWidth: scale(1),
            borderColor: COLORS.primaryLight,
            borderRadius: verticalScale(5),
        },

        itemRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },

        itemTitle: {
            fontSize: scale(14),
        },

        itemSubTitle: {
            fontSize: scale(12),
            fontWeight: 'bold',
        },

        itemValue: {
            fontSize: scale(14),
            fontWeight: 'bold',
            textAlign: 'right',
        },

        itinerariesContainer: {
            marginVertical: verticalScale(7.5),
        },


    }
);