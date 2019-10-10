import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import ModulesNavi from "./app/ModulesNavi";

interface Props {
}

interface State {
  isReady: boolean;
}

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    } else {
      return (
        <ModulesNavi />
      );
    }
  }
}
