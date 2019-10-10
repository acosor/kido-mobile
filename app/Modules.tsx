import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemBox: {
    alignItems: 'center',
    borderColor: "lightgray",
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    margin: 8,
    padding: 4,
    width: 80,
  },
  itemLabel: {

  },
});

const data = [
  { label: "DATA" },
  { label: "POS" },
];

const Modules = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {data.map((each, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemBox}
          >
            <View />
            <Text style={styles.itemLabel}>{each.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Modules;
