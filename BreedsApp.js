import { StyleSheet, View, FlatList } from 'react-native';
import { cats, dogs } from './breeds'
import Item from './Item'
import { SafeAreaView } from 'react-native'
import React from 'react';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={cats, dogs}
          renderItem={({ item, index }) => {
            return <Item item={item} index={index}/>;
          }}
          keyExtractor={(item) => item.index}
          />
      </SafeAreaView>
      <StatusBar style="auto"/>
    </View>
  );
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