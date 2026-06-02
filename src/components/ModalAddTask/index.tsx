import Modal from "react-native-modal";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";
import { colors } from "../../global/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function ModalAddTask({
  visible,
  onClose,
}: Props) {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.5}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <AntDesign
            name="close"
            size={26}
            color="#FFF"
          />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Feather
            name="clipboard"
            size={34}
            color={colors.background}
          />
        </View>

        <Text style={styles.title}>
          Nova Task
        </Text>

        <Text style={styles.label}>
          Título
        </Text>

        <TextInput
          placeholder="Ex: Finalizar relatório mensal"
          placeholderTextColor="#A7A5C4"
          style={styles.input}
        />

        <Text style={styles.label}>
          Descrição
        </Text>

        <TextInput
          multiline
          placeholder="Adicione mais detalhes sobre a tarefa..."
          placeholderTextColor="#A7A5C4"
          style={styles.textArea}
        />

        <Text style={styles.label}>
          Prioridade
        </Text>

        <View style={styles.priorityContainer}>
          <TouchableOpacity
            style={[
              styles.priorityButton,
              styles.priorityHigh,
            ]}
          >
            <Text style={styles.priorityText}>
              Alta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.priorityButton,
              styles.priorityMedium,
            ]}
          >
            <Text style={styles.priorityText}>
              Média
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.priorityButton,
              styles.priorityLow,
            ]}
          >
            <Text style={styles.priorityText}>
              Baixa
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={onClose}
          >
            <Text style={styles.cancelText}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createText}>
              Criar Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}