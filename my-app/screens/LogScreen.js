import React from "react";
import { Text, Button, View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { LoggerContext } from "../contexts/LoggerProvider";

const EventLog = (props) => {
  return (
    <View style={styles.event_title}>
      <View style={styles.event_title}>
        <Text>{props.event}</Text>
      </View>
      <View style={styles.event_data}>
        {props.data.map((x) => (
          <Text key={x}>{new Date(x).toString()}</Text>
        ))}
      </View>
    </View>
  );
};

const EventLogList = () => {
  const [log, setLog] = useContext(LoggerContext);

  return (
    <ScrollView style={styles.container}>
      {log.map((x) => (
        <EventLog {...x} key={JSON.stringify(x)} />
      ))}
    </ScrollView>
  );
};

export default function LogScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="New"
        onPress={() => {
          navigation.push("New");
        }}
      />
      <EventLogList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  event_title: {
    backgroundColor: "red",
    padding: 5,
    margin: 2,
    borderRadius: 10,
  },
  event_data: {
    backgroundColor: "#fff",
    margin: 2,
  },
});
