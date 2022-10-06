import React, { useState } from 'react';
import { View , Text, StyleSheet, Pressable } from 'react-native';
import EventDone from '../EventDone';
import EventLater from '../EventLater';

const HistoryScreen = () => {
    const [content, setContent] = useState('later');
    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Pressable
                        onPress={() => setContent('later')}
                    >
                        <Text style={[content == 'later' ? styles.selected : styles.unselected, styles.chooseText]}>
                            Évènements à venir
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setContent('done')}
                    >
                        <Text style={[content == 'done' ? styles.selected : styles.unselected, styles.chooseText]}>
                            Évènements réalisés
                        </Text>
                    </Pressable>
                </View>
                {content == 'later' ?
                    <EventLater />
                :
                    <EventDone />
                }
            </View>
        </>
    );
};

export default HistoryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9ECEF'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 15
    },
    selected: {
        borderBottomColor: '#324A5F',
        borderBottomWidth: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    chooseText: {
        fontSize: 15,
    }
})