import { Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold, Raleway_800ExtraBold } from '@expo-google-fonts/raleway';
import { Sarabun_400Regular, Sarabun_400Regular_Italic, Sarabun_600SemiBold, Sarabun_700Bold } from '@expo-google-fonts/sarabun';
import { useFonts } from 'expo-font';

import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import UserLoginScreen from './src/screens/userLoginPage/userLogin.js';
import UserCreateAccountScreen from './src/screens/userCreateAccountPage/userCreateAccount.js';
import TermsConditions from './src/screens/termsAndConditions/terms'
import AccDetailsBudget from './src/screens/accountDetailsBudgetPage/accountDetailsBudget.js'
import AccDetailsMacros from './src/screens/accountDetailsMacrosPage/accountDetailsMacros.js'
import AddRecord from './src/screens/addRecordPage/addRecord.js'
import SearchFood from './src/screens/searchFoodPage/searchFood.js'
import ForgotPassword from './src/screens/userForgotPasswordPage/userForgotPassword.js'
import Dashboard from './src/screens/dashboardPage/dashboard.js'
import Settings from './src/screens/settingsPage/settings.js'

import { Edamam_ID, Edamam_Key } from './src/edamam/config.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Sarabun_400Regular,
    Sarabun_400Regular_Italic,
    Sarabun_600SemiBold, 
    Sarabun_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  // const PlaceNavPanel = () => {
  //   //place condition
  //   return(<NavPanel />)
  // }

  return (
    <NavigationContainer>                 
      <Stack.Navigator initialRouteName="UserLogin">
        <Stack.Screen 
          name="UserLogin" 
          component={UserLoginScreen} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="UserCreateAccount" 
          component={UserCreateAccountScreen} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="TermsConditions" 
          component={TermsConditions} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="AccountDetailsBudget" 
          component={AccDetailsBudget} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="AccountDetailsMacros" 
          component={AccDetailsMacros} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="AddRecord" 
          component={AddRecord} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="SearchFood" 
          component={SearchFood} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{ headerShown: false }}/>
      </Stack.Navigator>


    </NavigationContainer>
  );
}

/*
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Hello navigation!</Text>
      </View>
      <NavigationContainer>
          <NavPanel />
      </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})
*/