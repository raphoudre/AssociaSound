import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import { View, Text, ImageBackground, Image } from 'react-native';

const Drawer = createDrawerNavigator();
const staticLogo = require("../assets/img/logo.png")

const NavigationManager = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitle: '',
                    drawerActiveBackgroundColor: '#324A5F',
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    headerStyle: {backgroundColor: '#6C757D'},
                    headerTitleStyle: {color: 'white'},
                    overlayColor: '#6C757D',
                    headerTransparent: false,
                    
                }}
                drawerContent={(props) => {
                    return(
                        <View style={{flex: 1}}>
                            <DrawerContentScrollView {...props}>
                                <Image source={require("../assets/img/logo.png")} style={{width: 150,height: 150,borderRadius:15,borderWidth:2,borderColor:'white', alignSelf: 'center'}}/>
                                <DrawerItemList {...props}/>
                            </DrawerContentScrollView>

                        </View>
                    )
                }}
                
            >
                <Drawer.Screen name='Home' options={{title: 'Accueil'}} component={HomeScreen}/>
                <Drawer.Screen name='History' options={{title: 'Évènements'}} component={HistoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default NavigationManager;