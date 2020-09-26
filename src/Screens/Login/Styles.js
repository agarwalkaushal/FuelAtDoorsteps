import { StyleSheet } from 'react-native';
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: '#1e121e',
            width: '100%',
            height: '100%',
        },

        appName: {
            marginTop: verticalScale(150),
            alignSelf: 'center',
            fontSize: scale(16),
            fontWeight: 'bold',
            color: '#FFFFFF',
        },

        signText: {
            marginTop: verticalScale(25),
            alignSelf: 'center',
            fontSize: scale(12),
            color: '#FFFFFF',
        },

        googleSignIn: {
            marginTop: verticalScale(120),
            alignSelf: 'center',
            width: scale(264), 
            height: verticalScale(48),
        },

        or: {
            marginTop: verticalScale(15),
            alignSelf: 'center',
            fontSize: scale(12),
            color: '#FFFFFF',
        },

        phoneInput: {
            marginTop: verticalScale(15),
            alignSelf: 'center',
            textAlign: 'center',
            width: scale(254), 
            height: verticalScale(42),
            borderRadius: verticalScale(2.5),
            borderWidth: scale(1),
            borderColor: '#D3D3D3',
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
        },

        button: {
            marginTop: 25,
            justifyContent: 'center',
            alignSelf: 'center'
        },

        otpView: {
            marginTop: verticalScale(120),
            alignSelf: 'center',
        },

        otpInputView: {
            width: '65%', 
            height: 50,
        },

        underlineStyleBase: {
            width: scale(30),
            height: verticalScale(45),
            borderWidth: 0,
            borderBottomWidth: 1,
            color: 'white',
        },

        underlineStyleHighLighted: {
            borderColor: "#735fbe",

        },

        tcContainer: {
            flexDirection: 'row',
            alignSelf: 'center',
            position: 'absolute',
            bottom: verticalScale(20),
        },

        tcText: {
            color: '#FFFFFF',
            fontSize: scale(8)
        },

        tcLinkText: {
            color: '#add8e6',
            fontSize: scale(8),
            textDecorationLine: 'underline'
        },

        /* aahhaham */

        iconContainer: {
            height: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
        },

        icon: {
            height: 100,
            width: 100,
        },

        info: {
            color: 'white',
            width: '75%',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: 30,
        },

        info1: {
            color: 'white',
            width: '75%',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: 10,
        },

        inputContainer: {
            padding: 5,
            margin: 5,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },

        resendCode: {
            color: 'white',
            width: '75%',
            fontSize: 13.5,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 30,
        },

        changeNumber: {
            color: '#735fbe',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginBottom: 30,
        }


        
    }
)