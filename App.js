import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hellho}> Hello Word </Text>
      <Text style={styles.maratona}> Maratonando Márcio </Text>
     

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hellho: {
    fontSize:30,
    color:'#fff',
  },
  maratona:{
    fontSize: 30,
    color: '#00ff00'
    

  },
  

});
