import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import setModuleBar from "../core/setModuleBar";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  iconTouch: {
    marginLeft: 8,
  }
});

export default class MasterDataScreen extends React.Component {
  static navigationOptions = setModuleBar("Products");

  render() {
    return (
      <View>
        <Text>
          Data1
        </Text>
      </View>
    );
  }
}
