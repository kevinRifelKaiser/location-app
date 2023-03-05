import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  dataContainer: {
    felx: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    width: "90%",
    height: 50,
    fontSize: 16,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
