import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { LoggerContext } from "../contexts/LoggerProvider";

const Event = (props) => {
  const [, , addEvent] = useContext(LoggerContext);
  return <Text onPress={()=> addEvent(props.event)} style={styles.event}>{props.event}</Text>;
};

const EventList = (props) => {
  return (
    <View>
      {props.events.map((x) => (
        <Event event={x.event} key={x.event} />
      ))}
    </View>
  );
};

export default function RecordScreen() {
  const [log, setLog] = useContext(LoggerContext);

  return (
    <View style={styles.container}>
      <EventList events={log} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  event: {
    backgroundColor: "green",
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
    margin: 2,
  },
});
