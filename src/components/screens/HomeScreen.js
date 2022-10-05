import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <Text style={styles.title}>
                        AssociaSound
                    </Text>
                    <Text style={styles.secondText}>
                        Vivre le son dans le moment présent
                    </Text>
                </View>
                <Text>
                    Hi
                </Text>
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCC9DC'
    },
    headerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    secondText: {
        fontSize: 15
    }
})