//projects screen
import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import FilterButtons from "./components/FilterButtons";
import Task from "./components/Task";

function GoalsScreen() {
  const [tasks, setTasks] = useState({
    "2023-11-06": [
      {
        name: "Task 1",
        minute: 30,
        description: "Short description for Task 1",
        priority: "Asap",
        status: "To Do",
      },
      {
        name: "Task 2",
        minute: 45,
        description: "Short description for Task 2",
        priority: "Low",
        status: "In Progress",
      },
    ],
    "2023-11-07": [
      {
        name: "Task 3",
        minute: 60,
        description: "Short description for Task 3",
        priority: "Medium",
        status: "Done",
      },
    ],
    "2023-11-11": [
      {
        name: "Task 4",
        minute: 15,
        description: "Short description for Task 4",
        priority: "Asap",
        status: "To Do",
      },
      {
        name: "Task 5",
        minute: 30,
        description: "Short description for Task 5",
        priority: "Asap",
        status: "In Process",
      },
      {
        name: "Task 6",
        minute: 45,
        description: "Short description for Task 6",
        priority: "Medium",
        status: "Done",
      },
    ],
  });

  const [activeFilter, setActiveFilter] = useState("To Do");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredTasks = Object.values(tasks)
    .flat()
    .filter((task) => task.status === activeFilter);

  return (
    <View style={styles.container}>
      <FilterButtons onFilterChange={handleFilterChange} />
      <ScrollView style={{ flex: 1, marginBottom: 90 }}>
        {filteredTasks &&
          filteredTasks.map((task, index) => <Task key={index} task={task} />)}
      </ScrollView>
    </View>
  );
}

export { GoalsScreen };
