import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import * as DocumentPicker from "expo-document-picker";
import { eachDayOfInterval, format } from "date-fns";
import styles from "./styles";
import AssignedToModal from "./AssignedToModal";

export default function MyModal({ modalVisible, setModalVisible }) {
  const [selectedValue, setSelectedValue] = useState();
  const [selectedDates, setSelectedDates] = useState({});
  const [startingDate, setStartingDate] = useState(null);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const onDayPress = (day) => {
    const asap = { key: "asap", color: "red", selectedDotColor: "red" };
    const medium = {
      key: "medium",
      color: "yellow",
      selectedDotColor: "yellow",
    };
    const workout = { key: "workout", color: "green" };
    if (!startingDate) {
      setStartingDate(day.dateString);
      // No starting date has been selected yet, so set the clicked date as the starting date
      console.log(startingDate, "after click");
      setSelectedDates({
        ...selectedDates,
        [day.dateString]: {
          selected: true,
          startingDay: true,
          color: "green",
          textColor: "gray",
        },
      });
    } else {
      // A starting date has already been selected, so set the clicked date as the ending date
      const startDate = new Date(startingDate);
      const endDate = new Date(day.dateString);

      const interval = eachDayOfInterval({
        start: startDate < endDate ? startDate : endDate,
        end: startDate > endDate ? startDate : endDate,
      });

      const newSelectedDates = interval.reduce((acc, date, index) => {
        const dateString = format(date, "yyyy-MM-dd");
        return {
          ...acc,
          [dateString]: {
            selected: true,
            startingDay: index === 0,
            endingDay: index === interval.length - 1,
            color: "green",
            textColor: "gray",
          },
        };
      }, {});
      setSelectedDates({
        ...selectedDates,
        ...newSelectedDates,
      });
      setStartingDate(null);
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    console.log(result);
    if (!result.canceled) {
      console.log(result.uri); // this is the local URI of the document
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={styles.backButtonContainer}>
              <Pressable
                style={styles.backButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </Pressable>
              <Text style={styles.modalText}>Add new task</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Faster Pay</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  style={{ width: 133, height: 50 }}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="ASAP" value="asap" />
                  <Picker.Item label="Medium" value="medium" />
                  <Picker.Item label="Low" value="Low" />
                </Picker>
              </View>
            </View>
          </View>
          <ScrollView style={styles.contentContainer}>
            <TextInput
              autoCapitalize="sentences"
              underlineColorAndroid="gray"
              allowFontScaling={true}
              style={styles.section}
              placeholder="Task name"
            />
            <View style={styles.textContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Assigned to:</Text>
                <View style={styles.addContainer}>
                  <Pressable onPress={() => setSecondModalVisible(true)}>
                    <Ionicons name="add-outline" size={24} color="black" />
                  </Pressable>
                  <Text style={styles.text}>Add</Text>
                </View>
              </View>
              <View
                style={(styles.textContainer, { margin: 0, paddingTop: 10 })}
              >
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={styles.person}
                    onPress={() => console.log("pressed")}
                  >
                    <Text style={styles.text}>Camile M.</Text>
                    <Ionicons name="close-outline" size={24} color="black" />
                  </Pressable>
                  <Pressable
                    style={styles.person}
                    onPress={() => console.log("pressed")}
                  >
                    <Text style={styles.text}>John D.</Text>
                    <Ionicons name="close-outline" size={24} color="black" />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Timeline:</Text>
              <Calendar
                markingType={"period"}
                onDayPress={onDayPress}
                markedDates={selectedDates}
              />
            </View>
            <View style={styles.textContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Descriptions:</Text>
                <View style={styles.addContainer}>
                  <Text style={styles.text}>Edit</Text>
                </View>
              </View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "200",
                  fontSize: 20,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pulvinar dolor at ante sagittis feugiat. Pellentesque.
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Attachments:</Text>
              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: "#d3d3d3",
                  borderStyle: "dashed",
                  borderRadius: 30,
                  padding: 10,
                  width: "auto",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={pickDocument}
              >
                <Ionicons name="cloud-upload" size={24} color="black" />
              </Pressable>
            </View>
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 2,
            }}
          >
            <Pressable>
              <View
                style={{
                  backgroundColor: "#212121",
                  borderRadius: 30,
                  height: 80,
                  width: 390,
                  paddingLeft: 20,
                  paddingRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>Add task</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {secondModalVisible && <View style={styles.blurView} />}
      </Modal>
      <AssignedToModal
        secondModalVisible={secondModalVisible}
        setSecondModalVisible={setSecondModalVisible}
      />
    </View>
  );
}
