import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { CardProps } from "../../@types/cardProps";
import CardTask from "../../components/CardTask";
import { useState } from "react";

const data: Array<CardProps> = [
  {
    id: 0,
    title: "Comprar pão",
    description: "Ir na padaria da esquina",
    flag: "urgente",
  },
  {
    id: 1,
    title: "Comprar leite",
    description: "Ir no mercado da esquina",
    flag: "medio",
  },
  {
    id: 2,
    title: "Comprar sabão",
    description: "Ir no mercado da esquina",
    flag: "baixo",
  },
];

export default function List() {
  const [filter, setFilter] = useState<"todos" | "urgente" | "medio" | "baixo">(
    "todos",
  );

  const priorityOrder = {
    urgente: 1,
    medio: 2,
    baixo: 3,
    concluido: 4,
  };

  const sortedData = [...data].sort(
    (a, b) => priorityOrder[a.flag] - priorityOrder[b.flag],
  );

  const filteredData =
  filter === "todos"
    ? sortedData
    : data.filter((task) => task.flag === filter);

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
      <View style={styles.lista}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "todos" && styles.filterButtonActive,
            ]}
            onPress={() => setFilter("todos")}
          >
            <Text style={[styles.filterText, filter === "todos" && styles.filterTextActive]}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "urgente" && styles.filterButtonActive,
            ]}
            onPress={() => setFilter("urgente")}
          >
            <Text style={[styles.filterText, filter === "urgente" && styles.filterTextActive]}>Urgentes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "medio" && styles.filterButtonActive,
            ]}
            onPress={() => setFilter("medio")}
          >
            <Text style={[styles.filterText, filter === "medio" && styles.filterTextActive]}>Médias</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "baixo" && styles.filterButtonActive,
            ]}
            onPress={() => setFilter("baixo")}
          >
            <Text style={[styles.filterText, filter === "baixo" && styles.filterTextActive]}>Baixas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CardTask task={item} />;
          }}
        />
      </View>
    </View>
  );
}
