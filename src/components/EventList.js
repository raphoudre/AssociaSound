import React from 'react';
import { FlatList, View } from 'react-native';
import EventCase from './EventCase';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Noc',
      cover: require('../assets/img/noc1.jpg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Mise à sac 2',
      cover: require('../assets/img/sac2.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fusion Fest',
      cover: require('../assets/img/fusion.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bf96-145571es9d72',
      title: 'Mise à sac 3',
      cover: require('../assets/img/sac3.jpg'),
    },
  ];

const EventList = () => {
    const renderItem = ({ item }) => (
        <EventCase title={item.title} />
    );
    return (
        <View>
            {DATA.map((item, index) => {
                return(
                    <EventCase event={item} key={`evKey${index}`}/>
                )
            })}
        </View>
    );
};

export default EventList;