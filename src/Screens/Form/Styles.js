import { StyleSheet } from 'react-native';
const { scale, verticalScale } = require("../../Utils/responsiveScaling");

export const Styles = StyleSheet.create(
    {
        screen: {
            backgroundColor: '#1e121e',
            width: '100%',
            height: '100%',
        },

        formText: {
            marginTop: verticalScale(85),
            marginBottom: verticalScale(45),
            alignSelf: 'center',
            fontSize: scale(16),
            fontWeight: 'bold',
            color: '#FFFFFF',
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
            color: 'white',
            fontSize: scale(10),
            marginBottom: verticalScale(10),
        },

        input: {
            borderWidth: scale(1),
            borderRadius: scale(5),
            borderColor: 'white',
            color: 'white',
            fontSize: scale(15),
            fontWeight: 'bold',
        },

        requirement: {
            alignSelf: 'center',
            fontSize: scale(15),
            marginLeft: scale(5),
            color: '#FFFFFF',
        },

        button: {
            marginTop: 15,
            paddingLeft:scale(25),
            width: scale(100),
        },

    }
);
