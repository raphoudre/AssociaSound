import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const EventCase = ({event}) => {
    return (
        <View style={{flexDirection: 'row', width: '100%', height: '20%'}}>
            <ImageBackground  source={event.cover}
                style={{
                    width: "100%",
                    backgroundColor:'#000',
                    padding: 20,
                    paddingVertical: 40,
                    position: 'absolute',
                    bottom:0,
                    left: 0
                }}
            >
                <Text>
                    {event.title}
                </Text>
            </ImageBackground>
        </View>
    );
};

export default EventCase;