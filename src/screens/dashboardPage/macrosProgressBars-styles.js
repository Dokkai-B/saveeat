import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    main: {
        // marginTop: vh(2),
        // flex: 1,
        // backgroundColor: 'white',
        // alignItems: 'center',
        // borderWidth: 1,  
        // alignSelf: 'center',

        // position: 'relative',      
    },

    caloriesProgressBar: {
        // flex: 1,
        alignSelf: 'center',
        zIndex: 1,
        // borderWidth: 1
    },
    
    proteinCarbsFats: {
        // width: '40%',
        justifyContent: 'center',
        // borderWidth: 1,
        borderColor: 'black',
        zIndex: 0,
        position: 'absolute',

        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    },

    proteinProgressBar: {
        // flex: 1,
        alignSelf: 'center',
        // marginTop: vh(4),
    },

    fatsAndCarbs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        alignSelf: 'center',
        // borderWidth: 1,
        marginTop: vh(1),
        
    },

    carbsProgressBar: {
        // marginTop: vh(7.5),
        // flex: 1,
        marginRight: vw(1),
    },

    fatsProgressBar: {
        // marginTop: vh(7.5),
        // flex: 1,
        marginLeft: vw(1),
    },

    macrosText: {
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: 11,
        marginTop: vh(2),
    },

    macrosTitle: {
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: 9,
    },

    calView: {
        // borderWidth: 1,
    },

    calText: {
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: 11,
        color: '#5a5a5a',
        alignSelf: 'center',
    },

    calTitle: {
        marginTop: vh(-1),
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: 12,
        color: '#5a5a5a',
        alignSelf: 'center',
    }

})
export default styles;