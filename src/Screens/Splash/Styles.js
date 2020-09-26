import { StyleSheet } from 'react-native';
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: '#1e121e',
            width: '100%',
            height: '100%',
        },

        image: {
            marginTop: verticalScale(250),
            width: scale(60),
            height: scale(60),
            alignSelf: 'center',
        },

        indicator: {
            marginTop: verticalScale(50),
            alignSelf: 'center',
        }
    }
);