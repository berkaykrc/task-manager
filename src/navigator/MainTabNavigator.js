import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GoalsScreen } from "../screens/main/GoalsScreen";
import { ProjectsScreen } from "../screens/main/ProjectsScreen";

const MainTab = createMaterialTopTabNavigator();

export function MainTabNavigator() {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#000",
        tabBarIndicatorStyle: {
          backgroundColor: "#000",
        },
        
      }}
    >
      <MainTab.Screen name="Projects" component={ProjectsScreen} />
      <MainTab.Screen name="Goals" component={GoalsScreen} />
    </MainTab.Navigator>
  );
}
