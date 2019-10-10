import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  touchableIcon: {
    marginLeft: 16,
  }
});

const withModuleBar = (props: { title: string; }) => ({ navigation }) => ({
  title: props.title.toUpperCase(),
  headerStyle: {
    backgroundColor: "#27d",
  },
  headerTintColor: "#fff",
  headerLeft: (
    <TouchableOpacity
      style={styles.touchableIcon}
      onPress={() => navigation.navigate("Modules")}
    >
      <MaterialCommunityIcons name="apps" color="#fff" size={32} />
    </TouchableOpacity>
  ),
});

export default withModuleBar;
