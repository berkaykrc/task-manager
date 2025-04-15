//projects screen
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import FilterButtons from "./components/FilterButtons";

function ProjectsScreen() {
  const [tasks, setTasks] = useState([]);

  const handleFilterChange = (filter) => {
    // Fetch the tasks based on the filter 
    const filteredTasks = fetchTasks(filter);
    setTasks(filteredTasks);
  };

  return (
    <View style={styles.container}>
      <FilterButtons onFilterChange={handleFilterChange} />
    </View>
  );
}

export { ProjectsScreen };
