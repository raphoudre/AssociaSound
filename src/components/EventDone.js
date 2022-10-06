import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventList from './EventList';

const EventDone = () => {
    return (
        <View style={styles.container}>
            <Text>
                Done
            </Text>
            <EventList />
        </View>
    );
};

export default EventDone;

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})