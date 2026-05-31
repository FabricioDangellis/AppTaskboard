import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function List() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerText}>Olá, Fabrício 👋</Text>
            <Text style={styles.headerTitle}>Minhas Tarefas</Text>
          </View>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.inputBox}>
          <View style={styles.icon}>
            <EvilIcons name="search" size={24} color="#B9B5D3" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#c5c5c5"
            placeholder="Pesquisar tarefa"
          />
        </View>
      </View>
    </View>
  );
}
