import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: vw(100),
        width: vw(100),
        backgroundColor: '#0173B4',
        fontFamily: 'Sarabun_400Regular',
        padding: vw(4),

    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: vh(3),
        

    },
    title: {
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: vw(8),
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: vh(10),
    
    },
    boxTitle: {
        color: '#FFFFFF',
        fontFamily: 'Sarabun_400Regular',
        fontSize: vw(2),
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.7,
        marginBottom: 10,
        padding: 8,
        borderRadius: 5,
        width: vw(80),
        fontFamily: 'Sarabun_400Regular',
        color: "#424242",
        backgroundColor: '#FFFFFF'
      },
    picker: {
        height: 40,
        width: vw(9),
        borderColor: 'gray',
        borderWidth: 0.7,
        marginBottom: 10,
        padding: 8,
        borderRadius: 5,
        fontFamily: 'Sarabun_400Regular',
        color: "#424242",
        backgroundColor: '#FFFFFF'
    },
    submitButton: {
        backgroundColor: '#424242',
        padding: 10,
        borderRadius: 8,
        width: vw(80),
        alignItems: 'center',
        marginTop: vw(40),
    }

})

export default styles;