import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
        }}
      >
        <Tabs.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <Tabs.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
