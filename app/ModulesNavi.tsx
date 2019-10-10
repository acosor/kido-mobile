import { createAppContainer, createSwitchNavigator } from "react-navigation";

import ModulesScreen from "./ModulesScreen";
import MasterDataModuleNavi from "./MasterData/MasterDataModuleNavi";

const ModulesNavi = createAppContainer(
  createSwitchNavigator(
    {
      Modules: ModulesScreen,
      MasterDataModule: MasterDataModuleNavi,
    },
    {
      initialRouteName: "Modules",
    },
  )
);

export default ModulesNavi;
