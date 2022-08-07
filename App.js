import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MenuScreen from "./src/screens/MenuScreen";
import CartScreen from "./src/screens/CartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Success from "./src/screens/success";

const navigator = createStackNavigator(
  {
    Menu: MenuScreen,
    CartScreen: CartScreen,
    Login: LoginScreen,
    Done: Success,
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "Hungry?!",
    },
  }
);

export default createAppContainer(navigator);

