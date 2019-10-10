import React from "react";
import { StyleSheet } from "react-native";
import { Fab, Icon } from "native-base";

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#27d"
  },
});

interface Props {
  onPress: () => void;
}

const CreateNewFAB: React.FC<Props> = ({ onPress }) => (
  <Fab
    style={styles.fab}
    position="bottomRight"
    onPress={onPress}
  >
    <Icon
      type="AntDesign"
      name="plus"
      fontSize={32}
    />
  </Fab>
);

export default CreateNewFAB;
