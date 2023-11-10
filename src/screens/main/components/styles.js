import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    centeredView: {
      backgroundColor: "white",
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
      padding: 20,
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
      fontSize: 33,
      fontWeight: "900",
      marginRight: 10,
    },
    pickerContainer: {
      width: 133,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "black",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    section: {
      fontSize: 17,
      padding: 15,
      marginBottom: 10,
    },
    contentContainer: {
      margin: 20,
      backgroundColor: "#fff",
      marginBottom: 100,
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