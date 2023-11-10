import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import MyModal from "./components/MyModal";
import styles from "./styles";
import { MainTabNavigator } from "../../navigator/MainTabNavigator";

function MainScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{backgroundColor:'blue', flex:1}}>
      <MainTabNavigator />
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="plus" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}

export { MainScreen };
