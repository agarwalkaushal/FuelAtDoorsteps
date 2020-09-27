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

        // container: {
        //     width: '100%',
        //     paddingHorizontal: scale(15),
        //     marginTop: verticalScale(50),
        // },

        priceHeader: {
            flexDirection: 'row',
            position: 'absolute',
            top: 0,
            height: verticalScale(45),
            width: '100%',
            backgroundColor: COLORS.offWhite,
        },

        fuel: {
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: scale(12),
            fontWeight: 'bold',
        }
    }
);