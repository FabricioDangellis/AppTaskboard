import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import GoogleIcon from "../../assets/search.png";
import AppleIcon from "../../assets/apple-logo.png";
import FacebookIcon from "../../assets/communication.png";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { UserService } from "../../services/UserService";

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<any>>();
  const userService = new UserService();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function cadastrar() {
    try {
      if (password !== confirmPassword) {
        Alert.alert("As senhãs estão diferentes");
        return;
      }

      await userService.create({
        name,
        email,
        password
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

      navigation.navigate("Login");
    } catch (e) {
      Alert.alert(
        "Erro",
        e instanceof Error ? e.message : "Erro ao cadastrar usuário",
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subTitle}>
          Junte-se ao TaskBoard e começe a organizar sua tarefas
        </Text>
      </View>

      <View style={styles.boxMid}>
        <View style={styles.inputBox}>
          <View style={styles.icon}>
            <FontAwesome name="user-o" size={30} color="#B9B5D3" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#c5c5c5"
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputBox}>
          <View style={styles.icon}>
            <Fontisto name="email" size={30} color="#B9B5D3" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#c5c5c5"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBox}>
          <View style={styles.icon}>
            <AntDesign name="lock" size={30} color="#B9B5D3" />
          </View>

          <TextInput
            style={styles.textInput}
            secureTextEntry={!showPassword}
            placeholderTextColor="#c5c5c5"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginRight: 4 }}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#B9B5D3"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputBox}>
          <View style={styles.icon}>
            <AntDesign name="lock" size={30} color="#B9B5D3" />
          </View>

          <TextInput
            style={styles.textInput}
            secureTextEntry={!showPassword}
            placeholderTextColor="#c5c5c5"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginRight: 4 }}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#B9B5D3"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={cadastrar}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxBottom}>
        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.dividerText}>ou cadastre-se com</Text>

          <View style={styles.line} />
        </View>

        <View style={styles.socialLogins}>
          <View style={styles.socialLoginButton}>
            <Image source={GoogleIcon} style={styles.socialLoginIcon} />
          </View>
          <View style={styles.socialLoginButton}>
            <Image source={AppleIcon} style={styles.socialLoginIcon} />
          </View>
          <View style={styles.socialLoginButton}>
            <Image source={FacebookIcon} style={styles.socialLoginIcon} />
          </View>
        </View>

        <View style={styles.signup}>
          <Text style={styles.textSignUp}>Já possui uma conta? Faça seu</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textButtonSignUp}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
