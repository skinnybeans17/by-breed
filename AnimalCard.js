import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function AnimalCard({ title, average, animal, numericFeatures }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.breedName}>{title}</Text>
                <Text style={styles.breedName}>Average: {average}</Text>
                <Text style={styles.breedName}>Animal: {animal}</Text>
                <Text style={styles.breedName}>Numeric Features: {numericFeatures}</Text>
            </View>
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