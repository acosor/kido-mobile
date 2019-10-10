import { createStackNavigator } from "react-navigation-stack";

import Home from "./screens/HomeScreen";
import NewProduct from "./screens/NewProductScreen";

const ProductsModuleNavi = createStackNavigator({
  Home,
  NewProduct,
});

export default ProductsModuleNavi;
