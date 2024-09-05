    import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
    import {StyleSheet} from 'react-native'


    const styles = StyleSheet.create({
        childContainer: {
            padding: 15,
            // borderWidth: 1,
            backgroundColor: 'white',
            marginBottom: 15, 
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'space-between',
                
        },

        dateText: {
            flex: 1,
            fontSize: 14.5,
            fontFamily: 'Sarabun_600SemiBold',
            position: 'absolute',
            left: 15,
            right: 0,
            top : 15,
            bottom: 0,
            // justifyContent: 'flex-start',
            // zIndex: 1,
        },

        macrosPart: {
            // alignSelf: 'center',
            // borderWidth: 1,
            width: '100%',
            
        },


        datePickerIcon: {
            flex: 1,
            // flexDirection: '',
            position: 'absolute',
            alignSelf: 'flex-end',

            // left: 0,
            right: 15,
            top : 15,
            // bottom: 15,
        },

        mealTimeTitle: {
            fontFamily: 'Raleway_600SemiBold',
            fontSize: 16,
            alignSelf: 'center',
            marginTop: vh(-0.5)
        },




    })
    export default styles;