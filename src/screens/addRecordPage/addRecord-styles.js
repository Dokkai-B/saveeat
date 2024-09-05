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
        backgroundColor: '#FFFFFF',
        marginHorizontal: vw(5),
        borderColor: '#6A6A6A',
    },

    title: {
        fontSize: 24,
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
        width: vw(50),
        marginBottom: 10,
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

    titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    },

    centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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