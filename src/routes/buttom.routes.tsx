import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

import List from "../pages/List";
import Perfil from "../pages/Perfil";
import CustomTabBar from "../components/CustomTabBar";
import ModalAddTask from "../components/ModalAddTask";

const Tab = createBottomTabNavigator();

export default function ButtomRoutes() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => (
          <CustomTabBar
            {...props}
            onAddTask={() => setModalVisible(true)}
          />
        )}
      >
        <Tab.Screen
          name="Home"
          component={List}
        />
        <Tab.Screen name="Perfil" component={Perfil}/>
      </Tab.Navigator>

      <ModalAddTask
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}