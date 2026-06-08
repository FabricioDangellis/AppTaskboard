import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import User from "../../assets/user.png";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topo}>
          <Text style={styles.titulo}>Meu Perfil</Text>
        </View>
        <View style={styles.user}>
          <Image style={styles.userImg} source={User} />
        </View>
        <Text style={styles.userName}>Fabrício</Text>
        <Text style={styles.userEmail}>fabricio@gmail.com</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.botao}>
          <Feather name="user" size={30} color="#ffffff" />
          <Text style={styles.botaoText}>Editar Perfil</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.botao}>
          <Ionicons name="notifications-outline" size={30} color="#ffffff" />
          <Text style={styles.botaoText}>Notificações</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.botao}>
          <Octicons name="file-directory" size={25} color="#ffffff" />
          <Text style={styles.botaoText}>Categorias</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.botao}>
          <Ionicons name="stats-chart-outline" size={25} color="#ffffff" />
          <Text style={styles.botaoText}>Estatisticas</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
