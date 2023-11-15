import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import NewScreen from "./screens/NewScreen";
import { LoggerProvider } from "./contexts/LoggerProvider";

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoggerProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="New" component={NewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoggerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
