import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/colors'
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: COLORS.primaryLight,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },

        image: {
            width: scale(60),
            height: scale(60),
        },

        name: {
            marginTop: verticalScale(35),
            fontWeight: 'bold',
            fontSize: scale(16),
            color: COLORS.white,
        },

        indicator: {
            marginTop: verticalScale(50),
        },

    }
);