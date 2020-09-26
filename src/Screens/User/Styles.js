import { StyleSheet } from 'react-native';
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
        },

        loadingIndicator: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },

        signOut: {
            marginTop: verticalScale(30),
            width: '30%',
            justifyContent: 'center',
            alignSelf: 'center'
        },
    }
);