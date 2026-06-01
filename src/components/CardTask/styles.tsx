import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: colors.inputBackground,
    height: 65,
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
    alignItems: "center",
    borderLeftWidth: 5,
  },
  taskRed: {
    borderLeftColor: colors.highPriority,
  },
  taskYellow: {
    borderLeftColor: colors.mediumPriority,
  },
  taskGreen: {
    borderLeftColor: colors.lowPriority,
  },
  taskInactive: {
    backgroundColor: colors.inputBackground,
    height: 65,
    borderRadius: 8,
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
    alignItems: "center",
    borderLeftWidth: 5,
    borderLeftColor: "#6d6d6d",
  },
  flagIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  flagRed: {
    backgroundColor: colors.highPriority,
  },
  flagYellow: {
    backgroundColor: colors.mediumPriority,
  },
  flagGreen: {
    backgroundColor: colors.lowPriority,
  },
  flagIconInactive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#6d6d6d",
  },
  textos: {
    flex: 1,
  },
  title: {
    fontFamily: "RolewayRegular",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  description: {
    fontFamily: "RolewayRegular",
    color: "#ffffff",
  },
  textInactive: {
    textDecorationLine: 'line-through',
  },
  flag: {
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 4,
  },
  flagText: {
    color: "#ffffff",
    textTransform: "capitalize",
  },
  flagInactive: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: "#6d6d6d",
  },
});
