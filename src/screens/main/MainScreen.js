import React, { useState } from "react";
import MyModal from "./components/MyModal";
import { View, Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

function MainScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="plus" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}

export { MainScreen };
