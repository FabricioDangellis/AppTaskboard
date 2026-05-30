import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/List";

const Tab = createBottomTabNavigator();

export default function ButtomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={List}/>
    </Tab.Navigator>
  );
}
