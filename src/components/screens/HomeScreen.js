import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <>
            <View style={styles.container}>
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
    }
})