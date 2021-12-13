import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Greeting = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Hello Danny! Is this thing on?</Text>
      <Text>You clikced {count} times</Text>
      <Button 
      onPress={() => setCount(count + 1)}
      title="Click Here!"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Greeting;



