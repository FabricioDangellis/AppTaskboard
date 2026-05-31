import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 25,
  },
  header: {
    width: "100%",
    height: Dimensions.get("window").height / 7,
    marginTop: 25,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "RolewayRegular",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "RolewayRegular",
  },
  logo: {
    width: 50,
    height: 50,
  },
  inputBox: {
    backgroundColor: colors.inputBackground,
    height: 50,
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  textInput: {
    flex: 1,
    height: 50,
    marginLeft: 8,
    color: "#ffffff",
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
