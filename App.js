import 'react-native-gesture-handler';
import React, { useState } from "react";
import BottomTabBarNavigator from "./src/navigator/BottomTabBar";
import AuthNavigator from "./src/navigator/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabBarNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
