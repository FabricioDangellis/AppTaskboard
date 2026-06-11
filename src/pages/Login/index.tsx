import React, { useState } from "react";
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
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import GoogleIcon from "../../assets/search.png";
import AppleIcon from "../../assets/apple-logo.png";
import FacebookIcon from "../../assets/communication.png";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { UserService } from "../../services/UserService";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const userService = new UserService();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function logar() {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      navigation.reset({ routes: [{ name: "ButtomRoutes" }] });
    } catch (e) {
      Alert.alert(
        "Erro",
        e instanceof Error ? e.message : "Erro ao fazer login",
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Bem vindo(a) de volta!</Text>
        <Text style={styles.subTitle}>
          Faça login na sua conta para cadastrar e visualizar tarefas
        </Text>
      </View>

      <View style={styles.boxMid}>
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
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonLogin} onPress={logar}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxBottom}>
        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.dividerText}>ou continue com</Text>

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
          <Text style={styles.textSignUp}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.textButtonSignUp}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
