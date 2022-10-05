import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';

const Drawer = createDrawerNavigator();


const NavigationManager = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitle: 'AssociaSound',
                    drawerActiveBackgroundColor: '#324A5F',
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    headerStyle: {backgroundColor: '#324A5F'},
                    headerTitleStyle: {color: 'white'}
                }}
                
            >
                <Drawer.Screen name='Home' options={{title: 'Accueil'}} component={HomeScreen}/>
                <Drawer.Screen name='History' options={{title: 'Évènements'}} component={HistoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default NavigationManager;