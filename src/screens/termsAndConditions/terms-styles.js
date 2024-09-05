import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    main: {
        marginTop: vw(3),
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#EEF0ED',


    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: vw(1),
        marginTop: vh(3),

    },
    
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },

    title: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: vw(8),
        textAlign: 'center',
        color: '#E76311',
        

    },

    contents: {
        fontFamily: 'Sarabun_400Regular',
        fontSize: vw(2.5),
        paddingHorizontal: vw(10),
        color: 'gray',
        textAlign: 'left',
    },

    container: {
        padding: 20,
        height: vh(60),
    },

    buttonMiddle: {
        backgroundColor: '#E76311',
        padding: 10,
        borderRadius: 8,
        width: vw(80),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: vw(3),
        color: '#EEF0ED',
    }
})
export default styles;