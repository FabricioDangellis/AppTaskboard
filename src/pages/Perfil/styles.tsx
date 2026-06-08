import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 25,
  },
  header: {
    marginTop: 25,
    alignItems: "center",
    marginBottom: 25,
  },
  topo: {
    alignItems: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 25,
    color: "#ffffff",
    fontFamily: "RolewayRegular",
    fontWeight: "bold",
  },
  user: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 60,
    borderColor: colors.inputBackground,
    marginBottom: 10,
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "RolewayRegular",
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "RolewayRegular",
  },
  body: {
    backgroundColor: colors.menuBackground,
    padding: 10,
    borderRadius: 16,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  botaoText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: "RolewayRegular",
    marginLeft: 10,
    flex: 1,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.inputBackground,
    marginVertical: 10,
  },
});
