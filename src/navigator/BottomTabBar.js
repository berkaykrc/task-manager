import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  MainScreen,
  NotificationScreen,
  CalendarScreen,
  MessageScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

function BottomTabBarNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused ? "home-variant" : "home-variant-outline";
            color = focused ? "#fff" : "#e9e9e9";
          } else if (route.name === "Notification") {
            iconName = "notification-clear-all";
            color = focused ? "#fff" : "#e9e9e9";
          } else if (route.name === "Calendar") {
            iconName = focused ? "calendar-month" : "calendar-month-outline";
            color = focused ? "#fff" : "#e9e9e9";
          } else if (route.name === "Message") {
            iconName = focused ? "chat-processing" : "chat-processing-outline";
            color = focused ? "#fff" : "#e9e9e9";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#212121",
          borderRadius: 30,
          height: 80,
          position: "absolute",
          margin: 5,
          borderTopWidth: 0,
          elevation: 0,
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
      />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabBarNavigator;
