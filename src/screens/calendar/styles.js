import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  task: {
    backgroundColor: "#faf398",
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    fontWeight: "300",
  },
  emptyData: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
