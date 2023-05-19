import { View, Text } from 'react-native'
import React from 'react';
import Card from '../../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

const Feed = () => {
  return (
    <ScrollView>
    <View>
      <Card name="Sergül Sopcalı" price="150" date="20.12.2022"/>
      <Card name="Elif Eylül Ersuz" price="120" date="02.12.2022"/>
      <Card name="Özlem Kartkaya" price="200" date="05.12.2022"/>
      <Card name="Elif Eylül Ersuz" price="50" date="12.12.2022"/>
      <Card name="Sergül Sopcalı" price="80" date="22.12.2022"/>
    </View>
    </ScrollView>
  )
}

export default Feed