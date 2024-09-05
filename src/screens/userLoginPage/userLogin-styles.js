import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: vh(30),
    width: vw(100),
    zIndex: 1
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
  logoContainer: {
    marginVertical: vh(6),
  }, 

  //   FORM STYLES
  formContainer: {
    marginVertical: vh(0),
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
  errorText: {
    fontFamily: 'Sarabun_400Regular',
    color: 'red',
    fontSize: 10
  }, 
  separator: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 20,
  },
  otherText: {
    fontFamily: 'Sarabun_400Regular',
    color: "#6A6A6A",
    fontSize: 12,
  }, 
  

//   BUTTON STYLES
  signInButton: {
    backgroundColor: '#EF782E',
    padding: 10,
    borderRadius: 8,
    width: vw(80),
    alignItems: 'center',
    marginTop: 20
  },
  signInButtonText: {
    fontFamily: 'Sarabun_700Bold',
    color: 'white',
    fontSize: 14,
    marginVertical:-3
  },
  createAccountButton: {
    backgroundColor: '#8F9E34',
    padding: 7,
    borderRadius: 8,
    width: vw(80),
    alignItems: 'center',
    marginTop: 20
  },
  createAccountButtonText: {
    fontFamily: 'Sarabun_700Bold',
    color: 'white',
    fontSize: 14,
  },
  continueAsGuestButton: {
    backgroundColor: '#464646',
    padding: 10,
    borderRadius: 8,
    width: vw(80),
    alignItems: 'center',
    marginTop: 20
  },
  continueAsGuestButtonText: {
    fontFamily: 'Sarabun_700Bold',
    color: 'white',
    fontSize: 14,
    marginVertical:-3
  }
});

export default styles;