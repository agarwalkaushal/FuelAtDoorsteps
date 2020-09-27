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

        formText: {
            marginTop: verticalScale(85),
            marginBottom: verticalScale(45),
            alignSelf: 'center',
            fontSize: scale(16),
            fontWeight: 'bold',
            color: COLORS.white,
        },

        formRow: {
            flexDirection: 'row',
        },

        form: {
            paddingHorizontal: scale(20),
        },

        formElement: {
            flex: 1,
            paddingHorizontal: scale(5),
            marginBottom: verticalScale(20),
        },

        heading: {
            color: COLORS.white,
            fontSize: scale(10),
            marginBottom: verticalScale(10),
        },

        input: {
            borderWidth: scale(1),
            borderRadius: scale(5),
            borderColor: COLORS.white,
            color: COLORS.white,
            fontSize: scale(15),
            fontWeight: 'bold',
        },

        requirement: {
            alignSelf: 'center',
            fontSize: scale(15),
            marginLeft: scale(5),
            color: COLORS.white,
        },

        button: {
            marginTop: 15,
            paddingLeft: scale(25),
            width: scale(100),
        },

    }
);
