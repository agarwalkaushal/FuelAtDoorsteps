import { StyleSheet } from 'react-native';
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
        },

        indicator: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
    }
);