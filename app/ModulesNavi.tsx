import { createAppContainer, createSwitchNavigator } from "react-navigation";

import ModulesScreen from "./ModulesScreen";
import ProductsModuleNavi from "./Products/ProductsModuleNavi";

const ModulesNavi = createAppContainer(
  createSwitchNavigator(
    {
      Modules: ModulesScreen,
      ProductsModule: ProductsModuleNavi,
    },
    {
      initialRouteName: "Modules",
    },
  )
);

export default ModulesNavi;
