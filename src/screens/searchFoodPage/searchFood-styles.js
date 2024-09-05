import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {StyleSheet} from 'react-native'
import { Button } from 'react-native-web';


const styles = StyleSheet.create({
    main: {
        marginHorizontal: vw(5),
        marginVertical: vh(6),
        // flex: 1,
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
        alignSelf: 'center',
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: vw(5),
        borderColor: '#6A6A6A',
        minWidth: vw(70),
    },

    title: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: vw(8),
        textAlign: 'center',
        color: '#E76311',
    },

    input1: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.7,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: vw(12),
        fontFamily: 'Sarabun_400Regular',
        color: "#424242"
    },

    input2: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.7,
        width: vw(60),

        padding: 8,
        borderRadius: 5,
        fontFamily: 'Sarabun_400Regular',
        color: "#424242"
    },

    inputUnit: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.7,
        marginRight: 7,
        padding: 8,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: vw(8),
        fontFamily: 'Sarabun_400Regular',
        color: "#424242",
        backgroundColor: '#EEF0ED',
    },

    contents: {
        fontFamily: 'Sarabun_400Regular',
        fontSize: vw(2.5),
        paddingHorizontal: vw(10),
        color: 'gray',
        textAlign: 'left',
    },

    mainContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        // marginHorizontal: vw(5),
        borderColor: '#6A6A6A',
        maxHeight: vh(90),
        maxWidth: vw(90),
    },

    container: {
        padding: 20,
        height: vh(60),
    },

    resultsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxHeight: vh(70),
        minHeight: vh(70),
    },

    results: { 
        marginBottom: 10, 
        alignSelf: 'flex-start',
    },

    button: {
        backgroundColor: '#E76311',
        borderRadius: 8,
        width: vw(20),
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontFamily: 'Sarabun_600SemiBold',
        fontSize: vw(3),
        color: '#EEF0ED',
    }
})
export default styles;