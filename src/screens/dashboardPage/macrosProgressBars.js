import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './macrosProgressBars-styles';


import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../../firebase/config.js';
import { collection , addDoc , doc, getDoc } from 'firebase/firestore';

const initialMaxData = {
    calories: 2500,
    protein: 50,
    carbohydrates: 50,
    fats: 50,
}


// maxData and currentData should be fetched from the database

const displayInfo = () => {
    console.log('maxData Info: ' + maxData.calories)
}




const MacrosProgressBars = ({date}) => {
    const [maxData, setMaxData] = useState(initialMaxData);

    useEffect(() => {
        const populateMaxData = async () => {
            try {
                const auth = getAuth();
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const uid = currentUser.uid;
                    const collectionRef = collection(database, 'users');
                    const userDocRef = doc(collectionRef, uid);
                    const userInfocollection = collection(userDocRef, 'userInfo');
                    const calories = doc(userInfocollection, 'caloriesInfo');

                    const docSnap = await getDoc(calories);
                    if (docSnap.exists()) {
                        const { proteinMax, carbMax, fatsMax, bmr } = docSnap.data();
                        setMaxData({
                            calories: bmr,
                            protein: proteinMax,
                            carbohydrates: carbMax,
                            fats: fatsMax
                        });
                    } else {
                        console.log("No such document!");
                    }
                } else {
                    console.log("No user is currently authenticated.");
                }
            } catch (error) {
                console.error("Error getting document:", error);
            }
        };

        populateMaxData();
    }, []);


    useEffect(() => {
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        console.log('passed date', formattedDate, 'to MacrosProgressBars');
    }, [date]);

    const currentData = {
        calories: 285,
        protein: 14,
        carbohydrates: 18,
        fats: 18,
    }
    
    const fillValue = {
        calories: Math.round((currentData.calories / maxData.calories) * 100),
        protein: Math.round((currentData.protein / maxData.protein) * 100),
        carbohydrates: Math.round((currentData.carbohydrates / maxData.carbohydrates) * 100),
        fats: Math.round((currentData.fats / maxData.fats) * 100),
        
    }

    return (
        <View>
            <View style={styles.main}>
                {console.log('maxData Info: ' + maxData.calories)}
                <AnimatedCircularProgress
                    size={260}
                    width={12}
                    fill={fillValue.calories} 
                    tintColor="#5a5a5a"
                    onAnimationComplete={() => console.log('caloriesProgressBar onAnimationComplete')}
                    backgroundColor="#cecece"
                    rotation={0}
                    style={styles.caloriesProgressBar}
                />

                <View style={styles.proteinCarbsFats}>

                    <AnimatedCircularProgress
                        size={75}
                        width={6.5}
                        fill={fillValue.protein} 
                        tintColor="#8F9E34"
                        onAnimationComplete={() => console.log('proteinProgressBar onAnimationComplete')}
                        backgroundColor="#dee2c3"
                        rotation={0}
                        style={styles.proteinProgressBar}
                    >
                        { 
                            () => {
                            return (
                                <>
                                <Text style={[styles.macrosText, {color: '#8F9E34'}]}>
                                    {currentData.protein}/{maxData.protein} g
                                </Text>
                                <Text style={[styles.macrosTitle, {color: '#8F9E34'}]}>   
                                    Protein
                                </Text>
                                </>
                            )
                            }
                        }
                    </AnimatedCircularProgress>

                    
                    <View style={styles.fatsAndCarbs}>

                        <AnimatedCircularProgress
                            size={75}
                            width={6.5}
                            fill={fillValue.carbohydrates}
                            tintColor="#FF624D"
                            onAnimationComplete={() => console.log('carbsProgressBar onAnimationComplete')}
                            backgroundColor="#FFD0CA"
                            rotation={0}
                            style={styles.carbsProgressBar}
                        >
                            { 
                                () => {
                                return (
                                    <>
                                    <Text style={[styles.macrosText, {color: '#FF624D'}]}>
                                        {currentData.carbohydrates}/{maxData.carbohydrates} g
                                    </Text>
                                    <Text style={[styles.macrosTitle, {color: '#FF624D'}]}>   
                                        Carbs
                                    </Text>
                                    </>
                                )
                                }
                            }
                        </AnimatedCircularProgress>

                        <AnimatedCircularProgress
                            size={75}
                            width={6.5}
                            fill={fillValue.fats} 
                            tintColor="#0098d2"
                            onAnimationComplete={() => console.log('fatsProgressBar onAnimationComplete')}
                            backgroundColor="#b3e1f2"
                            rotation={0}
                            style={styles.fatsProgressBar}
                        >
                            { 
                                () => {
                                return (
                                    <>
                                        <Text style={[styles.macrosText, {color: '#0098d2'}]}>
                                            {currentData.fats}/{maxData.fats} g
                                        </Text>
                                        <Text style={[styles.macrosTitle, {color: '#0098d2'}]}>   
                                            Fats
                                        </Text>
                                    </>
                                )
                                }
                            }
                        </AnimatedCircularProgress>
                            
                    </View>
                </View>
            </View>

            <View style={styles.calView}>
                <Text style={styles.calText}>
                    {currentData.calories}/{maxData.calories} kcal
                </Text>
                <Text style={styles.calTitle}>   
                    Calories
                </Text>
                
            </View>
        </View>
    );
};

export default MacrosProgressBars;