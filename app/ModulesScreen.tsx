import React from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";

const data = [
  { label: "Master Data", route: "MasterDataModule" },
  { label: "POS", route: "POSModule" },
  { label: "ORDER", route: "" },
];

interface Props extends NavigationContainerProps { }

const ModulesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {data.map((each, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemBox}
            onPress={() => navigation.navigate(each.route)}
          >
            <View />
            <Text style={styles.itemLabel}>{each.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  itemBox: {
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    height: 80,
    justifyContent: "center",
    margin: 8,
    padding: 4,
    width: 80,
  },
  itemLabel: {
    textAlign: "center",
    color: "#333",
    fontWeight: "700",
  },
});

export default ModulesScreen;
