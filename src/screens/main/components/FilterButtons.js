import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../styles';

function FilterButtons({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('To Do');

  const handlePress = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <View style={styles.filters}>
      {['To Do', 'In Process', 'Done'].map((filter) => (
        <Pressable
          key={filter}
          style={[
            styles.filterButton,
            activeFilter === filter && styles.activeFilter,
          ]}
          onPress={() => handlePress(filter)}
        >
          <Text style={activeFilter === filter ? styles.activeText : styles.inactiveText}>
            {filter}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default FilterButtons;