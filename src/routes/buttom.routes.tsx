import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/List";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function ButtomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={pros=><CustomTabBar {...pros}/>}
    >
      <Tab.Screen name="Home" component={List}/>
    </Tab.Navigator>
  );
}
