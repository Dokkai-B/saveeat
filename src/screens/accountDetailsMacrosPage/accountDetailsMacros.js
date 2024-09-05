import styles from './accountDetailsMacros-styles.js';
import { Text, SafeAreaView, View, TextInput, Pressable, Linking } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import Svg, { Path } from 'react-native-svg';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../../firebase/config.js';
import { collection , setDoc , doc, updateDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';



const UserAccountDetailsMacrosScreen = () => {
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

    
    const navigation = useNavigation();

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [goal, setGoal] = useState('');
    //const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [name, setName] = useState('');
    //const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);

    const [loading, setLoading] = useState(false);

    //--------------input handling
    const checkInput = async () => {
        if (Object.values(data).some(value => value === null || value === '')) {
           alert('Please fill out all fields');
           return;
         }
    
        if (data.weight > 300 || data.weight < 25) {
           alert('pls enter a valid weight')
           data.weight = null;
           return;
        }
        if (data.height > 260 || data.height < 140) {
           alert('pls enter a valid height')
           data.height = null;
           return;
        }

        if (data.age > 100 || data.height < 16) {
            alert('pls enter a valid age')
            data.height = null;
            return;
         }
          
        handleData();
    };


    const handleNumber = (text, datafield) => {
        // Remove non-numeric characters from the input text
        const filteredText = text.replace(/[^0-9.]/g, '');
      
        // Update the state with the filtered weight value
        setData(prevData => ({
          ...prevData,
          [datafield]: filteredText
        }));
      };


// ================user authentication================


    const [data, setData] = useState({
        height: null,
        weight: null,
        gender: '',
        age: null,
        goal: ''
    });

    const generateData = () => {        //you can change the formula, data is added to db/<user>/userinfo/calorie info
        //                  Mifflin-St Jeor Equation
        //Basal metabolic rate (BMR)=10Weight+6.25Height−5Age+5=2552

        const calculatePercent = (value, percent) => {
            return (value / 100) * percent;
        }

        console.log('generatingData')
        const bmr = (10 * data.weight) + (6.25 * data.height) - (5 * data.age) + 5
        //Dietary Reference Index formula source: (https://www.omnicalculator.com/health/dri#how-to-calculate-dri)
        const proteinMin = parseFloat(((calculatePercent(bmr, 10)) / 4).toFixed(2))
        const proteinMax = parseFloat(((calculatePercent(bmr, 30)) / 4).toFixed(2))
        const fatsMin =    parseFloat(((calculatePercent(bmr, 20)) / 9).toFixed(2))
        const fatsMax =    parseFloat(((calculatePercent(bmr, 30)) / 9).toFixed(2))
        const carbMin =    parseFloat(((calculatePercent(bmr, 45)) / 4).toFixed(2))
        const carbMax =    parseFloat(((calculatePercent(bmr, 65)) / 4).toFixed(2))
        const waterIntake = bmr / 1000              //if needed
        const fiber = bmr * 14                      //if needed

        setDoc(calories, {
            bmr: bmr,
            proteinMin: proteinMin,
            proteinMax: proteinMax,
            fatsMin: fatsMin,
            fatsMax: fatsMax,
            carbMin: carbMin,
            carbMax: carbMax,
            waterIntake: waterIntake,
            fiber: fiber   
        })
        .then(() => {
            alert('calorieInfoAdded');
        })
        .catch((err) => {
            alert(err.message); 
        });
        

    }
    


    let auth = getAuth();
    const currentUser = auth.currentUser;
    const uid = currentUser.uid;
    const collectionRef = collection(database, 'users');
    const userDocRef = doc(collectionRef,  uid);
    const userInfocollection = collection(userDocRef, 'userInfo')
    const loginInfo = doc(userInfocollection, 'signUpInfo')
    const calories = doc(userInfocollection, 'caloriesInfo') //u can change the title

    const handleData = () => { //call this last
        
        updateDoc(loginInfo, {
            height: data.height,
            weight: data.weight,
            gender: data.gender,
            age: data.age,
            goal: data.goal
            
        })
        .then(() => {
            generateData();
            navigation.navigate('Dashboard');
            
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
                    <Text style={styles.screenTitleText}>Account</Text>
                    <Text style={styles.screenTitleText}>Details</Text>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.titleInput}>Height (cm)</Text>
                    <TextInput value={data.height} style={styles.input}
                        placeholder="cm" autoCapitalize="none"
                        onChangeText={(text) => handleNumber(text, 'height')}>
                    </TextInput>
                
                    <Text style={styles.titleInput}>Weight (kg)</Text>
                    <TextInput value={data.weight} style={styles.input}
                        placeholder="kg" autoCapitalize="none"
                        onChangeText={(text) => handleNumber(text, 'weight')}>
                    </TextInput>

                    {/* Fix styling: center picker to border, overwrite Picker's default font */}
                    <Text style={styles.titleInput}>Gender</Text>
                    <View style={[styles.picker]}> 
                        <Picker
                            selectedValue={data.gender}
                            onValueChange={(itemValue) => setData({...data, gender: itemValue})}
                            style={styles.picker}
                        >
                            <Picker.Item label="Male" value="Male"/>
                            <Picker.Item label="Female" value="Female"/>
                        </Picker>
                    </View>

                    <Text style={styles.titleInput}>Age</Text>
                    <TextInput value={data.age} style={styles.input}
                        placeholder="Age" autoCapitalize="none"
                        onChangeText={(text) => handleNumber(text, 'age')}>
                    </TextInput>    

                    {/* Fix styling: center picker to border, overwrite Picker's default font */}
                    <Text style={styles.titleInput}>Goal</Text>
                    <View style={[styles.picker]}> 
                        <Picker
                            selectedValue={data.goal}
                            onValueChange={(itemValue, itemIndex) => setData({...data, goal: itemValue})}
                            style={styles.picker}
                        >
                            <Picker.Item label="Lose Weight" value="Lose Weight"/>
                            <Picker.Item label="Lose Weight Slowly" value="Lose Weight Slowly"/>
                            <Picker.Item label="Maintain Weight" value="Maintain Weight"/>
                            <Picker.Item label="Increase Weight Slowly" value="Increase Weight Slowly"/>
                            <Picker.Item label="Increase Weight" value="Increase Weight"/>
                        </Picker>
                    </View>

                    <Pressable
                        style={styles.createAccountButton}
                        onPress={checkInput}>    
                        <Text style={styles.createAccountButtonText}>Confirm Details</Text>
                    </Pressable>        
                </View>
        </SafeAreaView>
    );
  };

export default UserAccountDetailsMacrosScreen;