import styles from './searchFood-styles.js';
import { Text, Platform, ScrollView, View, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Image } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Edamam_ID, Edamam_Key } from '../../edamam/config.js';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';


const SearchFood = () => {           

    const [searchTerm, setSearchTerm] = useState('')
    const [nutrients, setNutrients] = useState([])
    const [showResults, setShowResults] = useState(false)

    const getFood = async () => {
        if (searchTerm !== '') {
            const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${Edamam_ID}&app_key=${Edamam_Key}&ingr=${searchTerm}&nutrition-type=cooking`)
            const data = await response.json()
            setNutrients(data.hints)
            setShowResults(true)
        } else {
            setShowResults(false)
        }
    }

    const handlePress = (food) => {
        // Store the food data
        // Log food data to console
        console.log(food);
    
        // Navigate to the Add Record Page
        // log message to console
        console.log('Navigate to Add Record Page');
    };

    return(
        <View style={styles.main}>
            <View style={styles.mainContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>
                        Search Food
                    </Text>
                </View>

                <View style={styles.rowContainer}>

                <TextInput value={searchTerm} style={styles.input2}
                            autoCapitalize="none" placeholder="Search Food"
                            onChangeText={(text) => setSearchTerm(text)}>
                </TextInput>

                <Pressable onPress={getFood} style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </Pressable>
                
                </View>

                <View style={styles.resultsContainer}>
                {showResults && (
                    
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {nutrients.slice(0, 15).map((item, index) => (
                            <Pressable key={index} onPress={() => handlePress(item.food)} style={styles.results}>
                                <Text> Name: {item.food.label} </Text>
                                <Text> Calories: {item.food.nutrients.ENERC_KCAL.toFixed(2)} </Text>
                                <Text> Protein: {item.food.nutrients.PROCNT.toFixed(2)} </Text>
                                <Text> Carbohydrates: {item.food.nutrients.CHOCDF.toFixed(2)} </Text>
                                <Text> Fat: {item.food.nutrients.FAT.toFixed(2)} </Text>
                                <Text> -------------------------------------- </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                )}
                </View>
            </View>


        </View>
    )
}
export default SearchFood;