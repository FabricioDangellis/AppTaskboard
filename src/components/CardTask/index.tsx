import { Text, TouchableOpacity, View } from "react-native";
import { CardTaskProps } from "../../@types/task";
import { styles } from "./styles";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTasks } from "../../context/TaskContex";
import { useAuth } from "../../context/AuthContext";

export default function CardTask({ task }: CardTaskProps) {
  const active = task.completed === 0;

  const { toggleCompleted } = useTasks();
  const { user } = useAuth();

  function renderFlagIcon(flag: string) {
    switch (flag) {
      case "urgente":
        return <Ionicons name="warning-outline" size={24} color="#ffffff" />;
      case "medio":
        return <AntDesign name="clock-circle" size={24} color="#ffffff" />;
      case "baixo":
        return <AntDesign name="check-circle" size={24} color="#ffffff" />;
      case "concluido":
        return <AntDesign name="check-circle" size={24} color="#ffffff" />;
    }
  }

  const taskStyle =
    task.flag === "urgente"
      ? styles.taskRed
      : task.flag === "medio"
        ? styles.taskYellow
        : styles.taskGreen;

  const flagStyle =
    task.flag === "urgente"
      ? styles.flagRed
      : task.flag === "medio"
        ? styles.flagYellow
        : styles.flagGreen;

  async function handleToggleTask() {
    if (!user) return;

    await toggleCompleted(
      task.id,
      user.id,
      task.completed === 0 ? 1 : 0,
    );
  }

  return (
    <TouchableOpacity
      style={[styles.taskCard, active ? taskStyle : styles.taskInactive]}
      onPress={handleToggleTask}
    >
      <View
        style={[styles.flagIcon, active ? flagStyle : styles.flagIconInactive]}
      >
        {renderFlagIcon(task.flag)}
      </View>

      <View style={styles.textos}>
        <Text style={[styles.title, !active && styles.textInactive]}>
          {task.title}
        </Text>
        <Text style={[styles.description, !active && styles.textInactive]}>
          {task.description ?? ""}
        </Text>
      </View>

      <View style={[styles.flag, active ? flagStyle : styles.flagInactive]}>
        <Text style={styles.flagText}>{task.flag}</Text>
      </View>
    </TouchableOpacity>
  );
}
