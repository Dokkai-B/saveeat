import styles from './userForgotPassword-styles.js';
import { Text, SafeAreaView, View, TextInput, Pressable, Linking, Button } from 'react-native';
import React, { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

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

const UserForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPasswordInputs, setShowPasswordInputs] = useState(false);

    const handleSubmit = () => {
        if (!showPasswordInputs) {
            setShowPasswordInputs(true);
            setErrorMessage(''); // Clear the error message when showing the password inputs
        } else {
            if (newPassword !== confirmPassword) {
                setErrorMessage('Passwords do not match');
                return;
            }
    
            // Handle the password reset
            // Clear the inputs and hide the password inputs
            setEmail('');
            setNewPassword('');
            setConfirmPassword('');
            setShowPasswordInputs(false);
            setErrorMessage(''); // Clear the error message when the form is submitted successfully
        }
    };

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
                    <Text style={styles.screenTitleText}>Reset</Text>
                    <Text style={styles.screenTitleText}>Password</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.titleInput}>Email</Text>
                <TextInput value = {email} style={styles.input}
                    placeholder="Email" autoCapitalize='none'
                    onChangeText={setEmail}
                />
                {showPasswordInputs && (
                    <>
                        <Text style={styles.titleInput}>New Password</Text> 
                        <TextInput value={newPassword} style={styles.input}
                            secureTextEntry
                            placeholder="New Password" autoCapitalize="none"
                            onChangeText={setNewPassword}
                        />
                        <Text style={styles.titleInput}>Confirm Password</Text> 
                        <TextInput value={confirmPassword} style={styles.input}
                            secureTextEntry
                            placeholder="Confirm Password" autoCapitalize="none"
                            onChangeText={setConfirmPassword}
                        />
                    </>
                )}
                
                <Pressable style={styles.createAccountButton} onPress={handleSubmit}>
                    <Text style={styles.createAccountButtonText}>{showPasswordInputs ? "Reset Password" : "Submit"}</Text>
                </Pressable>
                {errorMessage && <Text>{errorMessage}</Text>}
            </View>

        </SafeAreaView>
    );
}

export default UserForgotPasswordScreen;