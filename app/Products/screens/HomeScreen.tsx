import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CreateNewFAB from "../../components/CreateNewFAB";
import withModuleBar from "../../components/withModuleBar";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});

export default class HomeScreen extends React.Component<any> {
  static navigationOptions = withModuleBar({ title: "Products" });

  render() {
    return (
      <View style={styles.screen}>
        <Text>
          Data
        </Text>
        <CreateNewFAB
          onPress={() => this.props.navigation.navigate("NewProduct")}
        />
      </View>
    );
  }
}
