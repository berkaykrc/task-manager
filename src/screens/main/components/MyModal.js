import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import * as DocumentPicker from "expo-document-picker";
import { eachDayOfInterval, format } from "date-fns";

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
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="ASAP" value="asap" />
                <Picker.Item label="Medium" value="medium" />
                <Picker.Item label="Low" value="Low" />
              </Picker>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={() => {
          setSecondModalVisible(!secondModalVisible);
        }}
      >
        <View style={styles.secondModalView}>
          <Pressable onPress={() => setSecondModalVisible(!secondModalVisible)}>
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
            <View styles={styles.recently}>
              <Pressable style={styles.recentlyPerson}>
                <Image
                  source={{ uri: "https://th.bing.com/th/id/OIG.EzrRSf75H_zeADwjUA8.?pid=ImgGn" }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },
  modalView: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  blurView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  secondModalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: "#f4f5f7",
    flexDirection: "column",
    borderRadius: 25,
    paddingLeft: 20,
    paddingTop: 20,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f5f7",
    borderRadius: 25,
    paddingBottom: 20,
  },
  backButton: {
    borderRadius: 50,
  },
  modalText: {
    fontSize: 17,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
  },
  picker: {
    width: 117,
    height: 25,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "black",
  },
  section: {
    fontSize: 17,
    marginTop: 10,
    padding: 15,
  },
  contentContainer: {
    margin: 20,
    backgroundColor: "#fff",
  },
  textContainer: {
    margin: 10,
    flexDirection: "column",
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  person: {
    flexDirection: "row",
    flex: 0,
    backgroundColor: "#ebfeeb",
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  assignedToText: {
    fontSize: 23,
    fontWeight: "500",
  },
  searchBox: {
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f4f5f7",
    borderRadius: 30,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "300",
    fontSize: 20,
  },
  recently: {
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  recentlyPerson: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  nameEmailView: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 14,
    color: "#888",
  },
});
