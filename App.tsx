import { StatusBar } from "expo-status-bar";
import Login from "./src/pages/Login";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/index.routes";

export default function App() {
  const [loaded] = useFonts({
    Roleway: require("./src/assets/fonts/Raleway.ttf"),
    RolewayMedium: require("./src/assets/fonts/Raleway-Medium.ttf"),
    RolewayRegular: require("./src/assets/fonts/Raleway-Regular.ttf"),
  });

  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
    </>
  );
}
