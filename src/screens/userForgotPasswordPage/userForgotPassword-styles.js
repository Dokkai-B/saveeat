import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foregroundContainer: {
    position: 'absolute',
    backgroundColor: '#EEF0ED',
    alignItems: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    zIndex: 100,
    marginTop: vh(27),
    width: vw(100),
    height: '100%',
    flexGrow: 1,
  },

  RowContainer: {
    flexDirection: 'row',
    marginTop: vw(3),
    paddingHorizontal: vw(5),
    width: vw(100),
    height: vh(3),
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    width: vw(3),
    height: vh(3),
  },


//   FORM STYLES
  formContainer: {
    flex: 1,
    marginTop: vh(0),
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  pageTitleContainer: {
    // marginVertical: vh(6),
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: vh(7),
  },
  screenTitleText: {
    fontFamily: 'Raleway_800ExtraBold',
    fontSize: 45,
    marginBottom: -20,
    color: "#E76311"
  },
  titleInput: {
    fontFamily: 'Sarabun_400Regular',
    fontSize: 14,
    marginBottom: 5,
    color: "#6A6A6A",
    marginLeft: 10
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
    color: "#424242"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: vw(80),
    marginBottom: vh(2)
  },
  checkboxText: {
    fontFamily: 'Sarabun_400Regular',
    color: "#6A6A6A",
    fontSize: 13,
  },
  checkboxTextHighlight: {
    fontFamily: 'Sarabun_400Regular_Italic',
    color: "#E76311",
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.7,
    marginBottom: 10,
    padding: 0,
    paddingTop: vw(0),
    borderRadius: 5,
    
    // width: vw(80),
    fontFamily: 'Sarabun_400Regular',
    color: "#424242"
   },
  

//   BUTTON STYLES
  createAccountButton: {
    backgroundColor: '#8F9E34',
    padding: 7,
    borderRadius: 8,
    width: vw(80),
    alignItems: 'center',
    marginTop: vh(5)
  },
  createAccountButtonText: {
    fontFamily: 'Sarabun_700Bold',
    color: 'white',
    fontSize: 14,
  },

});

export default styles;