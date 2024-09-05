import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsPage = () => {
    const navigation = useNavigation();

    const [user, setUser] = useState({
        email: '',
        username: '',
        name: '',
        password: '',
        height: '',
        weight: '',
        gender: '',
        age: '',
        goal: '',
        dietType: '',
        currentBalance: '',
        nutritionResults: {
            bmr: '',
            bmi: '',
            waterRequirement: '',
            dailyCaloricRequirement: '',
        },
    });

    
};

export default SettingsPage;