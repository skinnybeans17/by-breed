import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import AnimalCard from './AnimalCard';

export default function DetailsScreen({route, navigation}) {
    const { title, average, animal, numericFeatures } = route.params;
    navigation.setOptions({title: `${title}, ${average}`})
    return (
        <View style={styles.container}>
            <ScrollView>
                <AnimalCard title={title} average={average} animal={animal} numericFeatures={numericFeatures}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  });