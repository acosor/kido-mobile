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

const Modules = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>App</Text>
      </View>
      <View>
        <Text>App</Text>
      </View>
    </View>
  );
}

export default Modules;
