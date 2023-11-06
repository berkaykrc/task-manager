import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Agenda } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";

function CalendarScreen() {
  const tasks = {
    "2023-11-06": [
      {
        name: "Task 1",
        minute: 30,
        description: "Short description for Task 1",
        priority: "asap",
      },
      {
        name: "Task 2",
        minute: 45,
        description: "Short description for Task 2",
        priority: "low",
      },
    ],
    "2023-11-07": [
      {
        name: "Task 3",
        minute: 60,
        description: "Short description for Task 3",
        priority: "medium",
      },
    ],
    "2023-11-11": [
      {
        name: "Task 4",
        minute: 15,
        description: "Short description for Task 4",
        priority: "asap",
      },
      {
        name: "Task 5",
        minute: 30,
        description: "Short description for Task 5",
        priority: "asap",
      },
      {
        name: "Task 6",
        minute: 45,
        description: "Short description for Task 6",
        priority: "medium",
      },
    ],
    // add more dates and tasks as needed
  };
  return (
    <Agenda
      items={tasks}
      renderItem={(item) => {
        let backgroundColor;
        switch (item.priority) {
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
          <View style={styles.item}>
            <View style={[styles.task, { backgroundColor }]}>
              <View style={styles.taskHeader}>
                <Text>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="stopwatch" size={24} color="black" />
                  <Text>{item.minute} minutes</Text>
                </View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      }}
      renderEmptyData={() => {
        return (
          <View style={styles.emptyData}>
            <Text>No tasks for this day</Text>
          </View>
        );
      }}
      markingType={"multi-dot"}
      markedDates={Object.keys(tasks).reduce((acc, date) => {
        acc[date] = {
          marked: true,
          dots: tasks[date].map(() => ({ color: "white", key: Math.random() })),
          selectedColor: "black",
          textColor: "white",
        };
        return acc;
      }, {})}
    />
  );
}

export { CalendarScreen };
