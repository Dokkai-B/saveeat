import styles from './userCreateAccount-styles.js';
import { Text, SafeAreaView, View, TextInput, Pressable, Linking } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import Svg, { Path } from 'react-native-svg';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../../firebase/config.js';
import { collection , addDoc , doc, setDoc } from 'firebase/firestore';

import { useNavigation } from '@react-navigation/native';

const XButton = () => {         ///not working on android
    
    return (
        
        <Svg dataSlot="icon" 
             aria-hidden="true" 
             fill="none" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             viewBox="0 0 24 24" 
             xmlns="http://www.w3.org/2000/svg"
             >
                
            <Path d="M6 18 18 6M6 6l12 12" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                   />
                  
        </Svg>
    )
}

const UserCreateAccountScreen = () => {
    const navigation = useNavigation();

    //const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    //const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);




    
   let auth = getAuth();

    const [data, setData] = useState({
        email: '',
        password: '',
        username: '',
        name: ''
    });


    //name of collection
    


    const handleInput = (event) => {
        let newInput = {[event.target.name]: event.target.value};
        setData({ ...data, ...newInput });
    };

    const handleSubmit = () => {
        //if successfull, get user UID and add the data.
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            handleData();
            navigation.navigate('AccountDetailsBudget');
            console.log(response.user)
        })
        .catch((err) => {
            alert(err.message)
        })
    };

    const handleData = () => { //call this last
        const currentUser = auth.currentUser;
        const uid = currentUser.uid;
        const collectionRef = collection(database, 'users');
        const userDocRef = doc(collectionRef,  uid);
        setDoc(userDocRef, {
            uid: currentUser.uid
            //add the rest here
            
        })
            const userInfocollection = collection(userDocRef, 'userInfo')
            const loginInfo = doc(userInfocollection, 'signUpInfo')
            setDoc(loginInfo, {
                Username: data.username,
                name: data.name,
                email: data.email,
                password: data.password,
                //add the rest here
                
            })
            

        .then(() => {
            alert('Data added');
        })
        .catch((err) => {
            alert(err.message);
        });
    }


    return (
        <SafeAreaView style={styles.container}>
               
                <View style={styles.RowContainer}> 
                <Pressable onPress={() => navigation.navigate('UserLogin')}>
                    <View style={styles.buttonContainer}>
                        <XButton/>
                    </View>
                </Pressable>
                </View>
                <View style={styles.pageTitleContainer}>
                    <Text style={styles.screenTitleText}>Create</Text>
                    <Text style={styles.screenTitleText}>Account</Text>
                </View>

                <View style={styles.formContainer}>  
                    <Text style={styles.titleInput}>Email</Text>
                    <TextInput value={data.email} style={styles.input}
                        placeholder="Email" autoCapitalize="none"
                        onChangeText={(text) => setData({...data, email: text})}>
                    </TextInput>

                    <Text style={styles.titleInput}>Username</Text>
                    <TextInput value={data.username} style={styles.input}
                        placeholder="Username" autoCapitalize="none"
                        onChangeText={(text) => setData({...data, username: text})}>
                    </TextInput>

                    <Text style={styles.titleInput}>Name</Text>
                    <TextInput value={data.name} style={styles.input}
                        placeholder="Name" autoCapitalize="none"
                        onChangeText={(text) => setData({...data, name: text})}>
                    </TextInput>

                    <Text style={styles.titleInput}>Password</Text>
                    <TextInput value={data.password} style={styles.input}
                        placeholder="Password" autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(text) => setData({...data, password: text})}>
                    </TextInput>

                    <Text style={styles.titleInput}>Confirm Password</Text>
                    <TextInput value={data.password} style={styles.input}
                        placeholder="Password" autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}>
                    </TextInput>



                    <View style={styles.checkboxContainer}>
                        <Checkbox style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked} />
                        <Text style={styles.checkboxText}>   I agree to the 
                            <Text style={styles.checkboxTextHighlight}> Terms and Conditions</Text>
                        </Text>
                        
                    </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#FFA451" />
                ) : (
                    <>
                        <Pressable
                            style={styles.createAccountButton}
                            onPress={handleSubmit}> 

                            <Text style={styles.createAccountButtonText}>Create Account</Text>
                        </Pressable>
                    </>
                )}

                
            </View>
        </SafeAreaView>
    );
  };

export default UserCreateAccountScreen;