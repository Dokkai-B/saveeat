import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './dashboard-styles';

import MacrosProgressBars from './macrosProgressBars';

const Tab = createMaterialTopTabNavigator();

const BudgetTab = () => {
    return (
        <View>
            <Text>Budget Page</Text>
        </View>
    );
};

const MacrosTab = () => {
    const currentDate = new Date()
    const [date, setDate] = useState(currentDate);
    const [datePickerShown, setDatePickerShown] = useState(false);
    const [iconColor, setIconColor] = useState('black');

    const openDatePicker = () => {
        setDatePickerShown(true);
    }

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDatePickerShown(false);
        setDate(currentDate);
    };

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.childContainer}>
                    
                    <Text style={styles.dateText}>{formattedDate}</Text>{/* Placeholder only */}
                    
                    <View style={styles.macrosPart}>
                        <MacrosProgressBars date={date}/>
                    </View>

                    <Pressable 
                        onPress={() => openDatePicker()}
                        onPressIn={() => setIconColor('#5A5A5A')}
                        onPressOut={() => setIconColor('black')}
                        style={styles.datePickerIcon}
                    >
                        <MaterialIcons name="date-range" size={24} color={iconColor} />
                    </Pressable>

                    {datePickerShown && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                        />
                    )}
                </View>

                <View style={styles.childContainer}>
                    <Text style={styles.mealTimeTitle}>Breakfast</Text>
                    
                    <View>
                        {/*<MealTaken/>*/}
                    </View>
                </View>

                <View style={styles.childContainer}>
                    <Text style={styles.mealTimeTitle}>Lunch</Text>

                    <View>
                        <Text>Placeholder 1</Text>
                        <Text>Placeholder 2</Text>
                        <Text>Placeholder 3</Text>
                        <Text>Placeholder 4</Text>
                        <Text>Placeholder 5</Text>
                    </View>

                </View>

                <View style={styles.childContainer}>
                    <Text style={styles.mealTimeTitle}>Dinner</Text>
                
                    <View>
                        <Text>Placeholder 1</Text>
                        <Text>Placeholder 2</Text>
                        <Text>Placeholder 3</Text>
                        <Text>Placeholder 4</Text>
                        <Text>Placeholder 5</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const DashboardPage = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard</Text>
                <Pressable onPress={() => console.log('Settings button pressed')}>
                    <MaterialIcons name="settings" size={24} color="black" />
                </Pressable>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Budget" component={BudgetTab} />
                <Tab.Screen name="Macros" component={MacrosTab} />
            </Tab.Navigator>

        <TouchableOpacity 
            style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:70,
                height:70,
                backgroundColor:'#fff',
                borderRadius:100,
                position: 'absolute',                                          
                bottom: 10,                                                    
                right: 10,
            }}
            onPress={() => console.log('Navigate to Add Record Page')}
        >
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>

        </View>
    );
};
export default DashboardPage;