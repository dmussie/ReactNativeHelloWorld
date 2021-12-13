import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Greeting = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello {props.name}! Is this thing on?</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const individualGreets = () => {
  return (
    <View style={styles.container}>
      <Greeting name="Danny" />
    </View>
  )
}

export default individualGreets;



