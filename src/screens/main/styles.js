import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    button: {
      position: "absolute",
      bottom: 100,
      right: 20,
      backgroundColor: "#212121",
      borderRadius: 50,
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
    },
    filters: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-around',
    },
    filterButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
      paddingHorizontal: 15,
      borderRadius: 15,
      borderColor:'#000',
      borderWidth: 1,
    },
    activeFilter: {
      backgroundColor: '#000',
    },
    inactiveFilter: {
      backgroundColor: '#fff',
    },
    activeText: {
      color: '#fff',
      fontSize: 16,
    },
    inactiveText: {
      color: '#000',
      fontSize: 16,
    },
  });