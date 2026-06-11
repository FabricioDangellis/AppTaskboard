import Modal from "react-native-modal";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { colors } from "../../global/colors";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTasks } from "../../context/TaskContex";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function ModalAddTask({
  visible,
  onClose,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState<"urgente" | "medio" | "baixo">("baixo");

  const { createTask } = useTasks();
  const { user } = useAuth();

  async function handelCreateTask() {
    try {
      if (!user) {
        throw new Error("Usuário não autenticado");
      }

      if (!title.trim()) {
        Alert.alert("Erro", "Informe o título da tarefa.");
      }

      if (!flag.trim()) {
        Alert.alert(
          "Erro",
          "Defina uma urgência para a relalização da tarefa.",
        );
      }

      await createTask({
        userId: user.id,
        title,
        description,
        flag,
      });

      Alert.alert("Sucesso", "Tarefa criada com sucesso!");

      setTitle("");
      setDescription("");
      setFlag("medio");

      onClose();
    } catch (e) {
      Alert.alert(
        "Erro",
        e instanceof Error ? e.message : "Erro ao criar tarefa",
      );
    }
  }

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <AntDesign name="close" size={26} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Feather name="clipboard" size={34} color={colors.background} />
        </View>

        <Text style={styles.title}>Nova Task</Text>

        <Text style={styles.label}>Título</Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Ex: Finalizar relatório mensal"
          placeholderTextColor="#A7A5C4"
          style={styles.input}
        />

        <Text style={styles.label}>Descrição</Text>

        <TextInput
          value={description}
          onChangeText={setDescription}
          multiline
          placeholder="Adicione mais detalhes sobre a tarefa..."
          placeholderTextColor="#A7A5C4"
          style={styles.textArea}
        />

        <Text style={styles.label}>Prioridade</Text>

        <View style={styles.priorityContainer}>
          <TouchableOpacity
            onPress={() => setFlag("urgente")}
            style={[
              styles.priorityButton,
              styles.priorityHigh,
              flag === "urgente" && styles.priorityHighSelected,
            ]}
          >
            <Text style={styles.priorityText}>Urgente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFlag("medio")}
            style={[
              styles.priorityButton,
              styles.priorityMedium,
              flag === "medio" && styles.priorityMediumSelected,
            ]}
          >
            <Text style={styles.priorityText}>Média</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setFlag("baixo")}
            style={[
              styles.priorityButton,
              styles.priorityLow,
              flag === "baixo" && styles.priorityLowSelected,
            ]}
          >
            <Text style={styles.priorityText}>Baixa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createButton}
            onPress={handelCreateTask}
          >
            <Text style={styles.createText}>Criar Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
