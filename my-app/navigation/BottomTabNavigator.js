import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import LogScreen from "../screens/LogScreen";
import RecordScreen from "../screens/RecordScreen";
import TabBarIcon from "../components/TabBarIcon";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

const getHeaderTitle = (route) => {
  // if getFocusedRouteNameFromRoute(route) returns null or undefined, then use INITIAL_ROUTE_NAME
  const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "RecordEvents":
      return "Links to learn more";
  }
};

const BottomTabNavigator = ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    }
  }, []);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={LogScreen}
        options={{
          title: "Event Log",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />

      <BottomTab.Screen
        name="RecordEvents"
        component={RecordScreen}
        options={{
          title: "Record Events",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
