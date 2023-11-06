import React, { useState } from "react";
import { View, Text, Modal, Pressable, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function AssignedToModal({
  secondModalVisible,
  setSecondModalVisible,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={secondModalVisible}
      onRequestClose={() => {
        setSecondModalVisible(!secondModalVisible);
      }}
    >
      <View style={styles.secondModalView}>
        <Pressable onPress={() => setSecondModalVisible(false)}>
          <Ionicons name="close-outline" size={24} color="black" />
        </Pressable>
        <View style={styles.innerView}>
          <Text style={styles.assignedToText}>Assign to</Text>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#000" />
            <TextInput placeholder="Name or email" style={styles.input} />
          </View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              paddingTop: 15,
            }}
          >
            Recently
          </Text>
          <View style={styles.recently}>
            <Pressable style={styles.recentlyPerson}>
              <Image
                source={{
                  uri: "https://th.bing.com/th/id/OIG.EzrRSf75H_zeADwjUA8.?pid=ImgGn",
                }}
                style={styles.photo}
              />
              <View style={styles.nameEmailView}>
                <Text style={styles.nameText}>James J.</Text>
                <Text style={styles.emailText}>james.jones@gmail.com</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
