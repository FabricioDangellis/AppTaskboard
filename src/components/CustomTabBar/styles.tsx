import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  tabArea: {
    position: "absolute",
    left: 25,
    right: 25,
    bottom: 45,
    flexDirection: "row",
    backgroundColor: colors.menuBackground,
    height: 70,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  tabAddContainer: {
    width: 60,
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabAdd: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    zIndex: 100,
    top: -30,
    borderRadius: 35,
    shadowColor: colors.background,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
  tabAddPressed: {
    backgroundColor: "#885f30",
  },
});
