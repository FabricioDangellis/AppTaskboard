import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 30,
    padding: 24,
  },

  closeButton: {
    alignSelf: "flex-end",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    color: "#FFF",
    fontFamily: "RolewayRegular",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },

  label: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
    fontFamily: "RolewayRegular",
  },

  input: {
    height: 55,
    backgroundColor: colors.inputBackground,
    borderRadius: 14,
    paddingHorizontal: 16,
    color: "#FFF",
    fontFamily: "RolewayRegular",
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  textArea: {
    height: 120,
    backgroundColor: colors.inputBackground,
    borderRadius: 14,
    padding: 16,
    color: "#FFF",
    textAlignVertical: "top",
    fontFamily: "RolewayRegular",
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  priorityButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  priorityHigh: {
    backgroundColor: "#C7412C66",
  },

  priorityMedium: {
    backgroundColor: "#e3970866",
  },

  priorityLow: {
    backgroundColor: "#6CCC7666",
  },

  priorityHighSelected: {
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: colors.highPriority, 
  },

  priorityMediumSelected: {
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: colors.mediumPriority,
  },

  priorityLowSelected: {
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: colors.lowPriority, 
  },

  priorityText: {
    color: "#FFF",
    fontWeight: "600",
    fontFamily: "RolewayRegular",
  },

  select: {
    height: 55,
    borderWidth: 1,
    borderColor: "#433E77",
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectText: {
    color: "#FFF",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  column: {
    flex: 1,
  },

  footer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 12,
  },

  cancelButton: {
    flex: 1,
    height: 55,
    borderWidth: 1,
    backgroundColor: colors.inputBackground,
    borderColor: colors.menuBackground,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  createButton: {
    flex: 1,
    height: 55,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#FFF",
    fontWeight: "600",
    fontFamily: "RolewayRegular",
  },

  createText: {
    color: colors.background,
    fontWeight: "700",
    fontFamily: "RolewayRegular",
  },
});
