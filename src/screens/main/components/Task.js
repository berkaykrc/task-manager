import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Task({ task }) {
  let backgroundColor;
  switch (task.priority.toLowerCase()) {
    case "asap":
      backgroundColor = "#c8fdc7";
      break;
    case "medium":
      backgroundColor = "#faf398";
      break;
    case "low":
      backgroundColor = "#dddefd";
      break;
    default:
      backgroundColor = "white";
  }

  return (
    <View style={[styles.task, { backgroundColor }]}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{task.name}</Text>
        <View style={styles.priority}>
          <Text>{task.priority}</Text>
        </View>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.bottomRow}>
        <MaterialCommunityIcons name="timer" size={24} color="black" />
        <Text>{task.duration}</Text>
        {/* Replace this with the actual images */}
        {task.assignedPeople &&
          task.assignedPeople.map((person, index) => (
            <Image
              key={index}
              source={{ uri: person.photo }}
              style={styles.personPhoto}
            />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 15,
    margin: 5,
    borderRadius: 30,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  priority: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },
  description: {
    marginTop: 10,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  personPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
});

export default Task;
