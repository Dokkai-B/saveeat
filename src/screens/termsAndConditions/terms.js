import styles from './terms-styles';
import { Text, SafeAreaView, ScrollView, View, TextInput, Pressable } from 'react-native';
import { Image } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase/config.js';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const button = (text, page) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={styles.buttonMiddle}
            onPress={() => navigation.navigate(page)}
            >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}


const Terms = () => {           ///fix the text ehre

    const termsText = `
Welcome to SaveEat. These terms and conditions govern your use of the SaveEat App, including any updates or new features added over time. By using SaveEat you agree to be bound by these Terms. If you do not agree to these Terms, please do not use SaveEat.

Acceptance of Terms
By downloading, installing, or using the App, you agree to these Terms and acknowledge that you have read, understood, and accept them. These Terms constitute a binding agreement between you and the SaveEat team.

Use of the App 
You must be at least 16 years old or have the consent of a parent or legal guardian to use SaveEat.
You agree to use SaveEat only for lawful purposes and in accordance with these Terms.
You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.

Features and Services
SaveEat provides tools to track both expenses and nutrition intake.
SaveEat may offer additional features, which may be subject to separate terms and conditions.

Privacy
We respect your privacy and are committed to protecting your personal information. Please review our Privacy Policy to understand how we collect, use, and disclose your information.
By using SaveEat, you consent to the collection and use of your information as described in the Privacy Policy.
User Content
You retain ownership of any content you submit or upload to SaveEat, including expense and nutrition data.
By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display the User Content for the purpose of providing and improving SaveEat.
Prohibited Activities
You agree not to engage in any of the following activities while using SaveEat:
- Violating any laws or regulations;
- Interfering with or disrupting SaveEat or servers or networks connected to SaveEat;
- Reverse-engineering, decompiling, or disassembling SaveEat;
- Attempting to gain unauthorized access to any portion of SaveEat or any other systems or networks connected to SaveEat.

Disclaimer of Warranty
SaveEat is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied.
The SaveEat team does not warrant that SaveEat will be error-free or uninterrupted, or that defects will be corrected.

Limitation of Liability
In no event shall the SaveEat team be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or related to the use of SaveEat.

Changes to Terms
The SaveEat team reserves the right to modify or replace these Terms at any time.
If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
    `;

    
    return(
        <View style={styles.main}> 
            <View style={styles.rowContainer}>
                <Text style={styles.title}>
                    Terms & {'\n'} Conditions
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.rowContainer}>
                    <Text style={styles.contents}>
                        {termsText}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.rowContainer}>
                {button('Accept and Continue', 'UserCreateAccount')}
            </View>
        </View>
    )
}

export default Terms;