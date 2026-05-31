import React from "react";
import { Text, TouchableOpacity, Pressable, View } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../global/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const go = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.tabArea}>
      <TouchableOpacity style={styles.tabItem} onPress={() => go("Home")}>
        <AntDesign
          name="unordered-list"
          size={24}
          color="#ffffff"
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        />
      </TouchableOpacity>

      {state.index === 0 && (
        <Pressable
          style={({ pressed }) => [
            styles.tabAdd,
            pressed && styles.tabAddPressed,
          ]}
        >
          <AntDesign name="plus" size={24} color={colors.background} />
        </Pressable>
      )}

      <TouchableOpacity style={styles.tabItem} onPress={() => go("User")}>
        <FontAwesome
          name="user-o"
          size={24}
          color="#ffffff"
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
        />
      </TouchableOpacity>
    </View>
  );
}
