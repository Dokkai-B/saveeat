import styles from './accountDetailsBudget-styles.js';
import { Text, SafeAreaView, View, TextInput, Pressable, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import Svg, { Path } from 'react-native-svg';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../../firebase/config.js';
import { collection , addDoc , doc, updateDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const AccountDetails = () => {
    const [data, setData] = useState({
        balance: '',
        currency: ''
      })

    let auth = getAuth();
    const navigation = useNavigation();


    const handleData = () => { //call this last

        const currentUser = auth.currentUser;
        const uid = currentUser.uid;
        const collectionRef = collection(database, 'users');
        const userDocRef = doc(collectionRef,  uid);
        const userInfocollection = collection(userDocRef, 'userInfo')
        const loginInfo = doc(userInfocollection, 'signUpInfo')
        updateDoc(loginInfo, {
            balance: data.balance,
            currency: data.currency
            //add the rest here
        })
        .then(() => {
            alert('Data added');
        })
        .catch((err) => {
            alert(err.message);
        });
        alert('budget info added');
        navigation.navigate('AccountDetailsMacros');

        
    }


    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer} >
                <Text style={styles.title}>
                    Account{'\n'}Detials
                </Text>
            </View>

            <View style={styles.rowContainer} >
                <Text style={styles.boxTitle}>
                    Current Balance
                </Text>
            </View>
            <View style={styles.rowContainer} >
                        <TextInput value={data.balance} 
                                   style={styles.input}
                                   placeholder="balance" 
                                   placeholderTextColor="gray" 
                                   autoCapitalize="none"
                                   onChangeText={(text) => setData({...data, balance: text})}>
                        </TextInput>
            </View>

            <View style={styles.rowContainer} >
                <Text style={styles.boxTitle}>
                    Currency
                </Text>
            </View>
            <View style={styles.rowContainer} >
                <Picker selectedValue={data.currency}
                        onValueChange={(itemValue) => setData({ ...data, currency: itemValue })}
                        style={styles.picker}>

                    <Picker.Item label="Php" value="Php" />
                    <Picker.Item label="USD" value="USD" />
                </Picker>
            </View>

            <View style={styles.rowContainer} >
                <Pressable
                    style={styles.submitButton}
                    onPress={handleData}>
                    <Text style={styles.signInButtonText}>Next</Text>
                </Pressable>
            </View>
            

        </View>
    )

}

export default AccountDetails;