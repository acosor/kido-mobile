import { createStackNavigator } from "react-navigation-stack";
import DataScreen from "./MasterDataScreen";

const MasterDataModuleNavi = createStackNavigator({
  Data: DataScreen,
});

export default MasterDataModuleNavi;
