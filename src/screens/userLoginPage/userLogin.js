import styles from './userLogin-styles.js';
import { Text, SafeAreaView, View, TextInput, Pressable } from 'react-native';
import { Image } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


//   export default function UserLogin()
const UserLoginScreen = () => {

    let auth = getAuth();

    /// email and password dataholder
    const [data, setData] = useState({
        email: '',
        password: ''
      })


    ///Authenticate email and password
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response.user)
            navigation.navigate('Dashboard')
        })
        .catch((err) => {
            alert(err.message)
        })
    };

    
    // const { control, handleSubmit, formState: { errors } } = useForm();
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    //const signIn = async () => {
    //    setLoading(true);
    //    try {
    //        await auth.signInWithEmailAndPassword(email, password);
    //    } catch (error) {
    //        console.log(error);
    //    }
    //    setLoading(false);
    //}

    const navigation = useNavigation();

    // const createAccount = async () => {
        
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image 
                    style={styles.backgroundImage}
                    source={require('../../../assets/tangerine-newt.jpg')} />

                <View style={styles.foregroundContainer}>
        
                    <View style={styles.logoContainer}>
                        <Image source={require('../../../assets/saveeat.png')} />
                    </View>

                    <View style={styles.formContainer}>

                        <Text style={styles.titleInput}>Email</Text>
                        <TextInput value={data.email} style={styles.input}
                            placeholder="Email" autoCapitalize="none"
                            onChangeText={(text) => setData({...data, email: text})}>
                        </TextInput>

                        <Text style={styles.titleInput}>Password</Text>
                        <TextInput value={data.password} style={styles.input}
                            placeholder="Password" autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(text) => setData({...data, password: text})}>
                        </TextInput>
                    
                    {loading ? (
                        <ActivityIndicator size="large" color="#FFA451" />
                    ) : (
                        <>
                        <Pressable
                            style={styles.signInButton}
                            onPress={handleSubmit}>

                            <Text style={styles.signInButtonText}>Sign In</Text>
                        </Pressable>

                        <View style={styles.separator}>
                            <View style={{flex: 1, height: 1, backgroundColor: '#CFCFCF', right: 10}} />
                            <Text style={styles.otherText}>Or if you don't have an account</Text>
                            <View style={{flex: 1, height: 1, backgroundColor: '#CFCFCF', left: 10}} />
                        </View>

                        <Pressable
                            style={styles.createAccountButton}
                            onPress={() => navigation.navigate('TermsConditions')}> 

                            <Text style={styles.createAccountButtonText}>Create Account</Text>
                        </Pressable>
                        </>
                    )}
                    </View>
                </View>
            
            </View>
        </SafeAreaView>
    );
  };

export default UserLoginScreen;