import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainerProps } from "react-navigation";

const data = [
  { label: "PoS", route: "PoSModule" },
  { label: "Orders", route: "OrdersModule" },
  { label: "Products", route: "ProductsModule" },
];

interface Props extends NavigationContainerProps { }

const ModulesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data.map((each, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => navigation.navigate(each.route)}
          >
            <View />
            <Text style={styles.label}>{each.label.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    flex: 1,
    height: 80,
    justifyContent: "center",
    margin: 8,
    padding: 4,
  },
  label: {
    textAlign: "center",
    color: "#333",
    fontWeight: "700",
  },
});

export default ModulesScreen;
