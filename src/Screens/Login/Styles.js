import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/colors'
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: COLORS.primaryLight,
            width: '100%',
            height: '100%',
        },

        appName: {
            marginTop: verticalScale(150),
            alignSelf: 'center',
            fontSize: scale(16),
            fontWeight: 'bold',
            color: COLORS.white,
        },

        signText: {
            marginTop: verticalScale(25),
            alignSelf: 'center',
            fontSize: scale(12),
            color: COLORS.white,
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
            color: COLORS.white,
        },

        phoneInput: {
            marginTop: verticalScale(15),
            alignSelf: 'center',
            textAlign: 'center',
            width: scale(254),
            height: verticalScale(42),
            borderRadius: verticalScale(2.5),
            borderWidth: scale(1),
            borderColor: COLORS.lightGray,
            color: COLORS.white,
            fontSize: 14,
            fontWeight: 'bold'
        },

        button: {
            marginTop: 25,
            justifyContent: 'center',
            alignSelf: 'center'
        },

        otpViewText: {
            marginTop: verticalScale(150),
            alignSelf: 'center',
            marginHorizontal: scale(20),
            fontSize: scale(14),
            color: COLORS.white,
            lineHeight: verticalScale(16),
            fontWeight: 'bold',
        },

        otpViewEditText: {
            fontSize: scale(14),
            fontWeight: 'bold',
            color: COLORS.button,
        },

        otpView: {
            marginTop: verticalScale(120),
            alignSelf: 'center',
        },

        otpInputView: {
            width: '65%',
            height: 50,
        },

        resendCodeText: {
            fontSize: scale(14),
            fontWeight: 'bold',
            color: COLORS.button,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: verticalScale(15),
        },

        underlineStyleBase: {
            width: scale(30),
            height: verticalScale(45),
            borderWidth: 0,
            borderBottomWidth: 1,
            color: COLORS.white,
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
            color: COLORS.white,
            fontSize: scale(8)
        },

        tcLinkText: {
            color: COLORS.lightBlue,
            fontSize: scale(8),
            textDecorationLine: 'underline'
        },
    }
)