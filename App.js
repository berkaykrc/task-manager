import BottomTabBarNavigator from "./src/navigator/BottomTabBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabBarNavigator />
    </NavigationContainer>
  );
}