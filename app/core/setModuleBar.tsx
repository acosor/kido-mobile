import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  touchableIcon: {
    marginLeft: 16,
  }
});

const setModuleBar = (title: string = "") => ({ navigation }) => ({
  title: title.toUpperCase(),
  headerStyle: {
    backgroundColor: "#2d76d2",
  },
  headerTintColor: "#fff",
  headerLeft: (
    <TouchableOpacity
      style={styles.touchableIcon}
      onPress={() => navigation.navigate("Modules")}
    >
      <MaterialIcons color="#fff" name="apps" size={32} />
    </TouchableOpacity>
  ),
});

export default setModuleBar;
