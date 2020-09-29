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
    }
);