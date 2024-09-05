import styles from './addRecord-styles.js';
// import { Text, SafeAreaView, ScrollView, View, TextInput, Pressable } from 'react-native';
// import { Image } from 'react-native';
// import { FIREBASE_AUTH } from '../../firebase/config.js';
// import { useState } from 'react';
// import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// // const button = (text, page) => {
// //     const navigation = useNavigation();
// //     return (
// //         <Pressable
// //             style={styles.buttonMiddle}
// //             onPress={() => navigation.navigate(page)}
// //             >
// //             <Text style={styles.buttonText}>{text}</Text>
// //         </Pressable>
// //     )
// // }


// const AddRecord = () => {           ///fix the text ehre
    
//     const navigation = useNavigation();

//     const [food, setFood] = useState({
//         size: '',
//         name: '',
//     })


//     return(
//         <View style={styles.main}> 
//             <View style={styles.rowContainer}>
//                 <Text style={styles.title}>
//                     Add Record
//                 </Text>
//             </View>

//             <ScrollView contentContainerStyle={styles.scrollViewContent}>
//                 <View style={styles.rowContainer}>
//                     <TextInput value={food.size} style={styles.input1}
//                             placeholder="0" autoCapitalize="none"
//                             onChangeText={(text) => setFood({...food, size: text})}>
//                     </TextInput>
                    
//                     <Text style={styles.inputUnit}> g </Text>

//                     <Pressable onPress={() => navigation.navigate('SearchFood')}>
//                         <TextInput value={food.name} style={styles.input2}
//                                 placeholder="Food" autoCapitalize="none"
//                                 editable = {false}
//                                 onChangeText={(text) => setFood({...food, name: text})}>
//                         </TextInput>
//                     </Pressable>
//                 </View>
//             </ScrollView>

//             <View style={styles.rowContainer}>
//                 {/* {button('Accept and Continue', 'UserCreateAccount')} */}
//             </View>
//         </View>
//     )
// }
// export default AddRecord;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from '@expo/vector-icons';

import { useState } from 'react';
import { ScrollView, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const IncomeTab = () => (
    <View style={styles.centeredContainer}>
        <Text>Income Placeholder</Text>
    </View>
);

const ExpenseAndIntakeTab = () => {
    const navigation = useNavigation();

    const [food, setFood] = useState({
        size: '',
        name: '',
    });

    return (
        <View style={styles.centeredContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.rowContainer}>
                    <TextInput 
                        value={food.size} 
                        style={styles.input1}
                        placeholder="0" 
                        autoCapitalize="none"
                        onChangeText={(text) => setFood({...food, size: text})}
                    />
                    
                    <Text style={styles.inputUnit}> g </Text>

                    <Pressable onPress={() => navigation.navigate('SearchFood')}>
                        <TextInput 
                            value={food.name} 
                            style={styles.input2}
                            placeholder="Food" 
                            autoCapitalize="none"
                            editable = {false}
                            onChangeText={(text) => setFood({...food, name: text})}
                        />
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

const AddRecord = ({ navigation }) => (
    <View style={styles.main}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Add Record</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <Tab.Navigator>
            <Tab.Screen name="Income" component={IncomeTab} />
            <Tab.Screen name="Expense and Intake" component={ExpenseAndIntakeTab} />
        </Tab.Navigator>
    </View>
);

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//     },
//     titleContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//     },
//     title: {
//         fontSize: 24,
//     },
//     centeredContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

export default AddRecord;