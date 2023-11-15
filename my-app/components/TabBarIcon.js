import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? "#2f95dc" : "#ccc"}
    />
  );
};

export default TabBarIcon;
