import * as Crypto from "expo-crypto";
import { CreateUserDTO } from "../@types/user/CreateUserDTO";
import { UserRepository } from "../database/repositories/UserRepository";
import { UpdateUserDTO } from "../@types/user/UpdateUserDTO";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create({ name, email, password }: CreateUserDTO) {
    const userExist = await this.userRepository.findByEmail(email);

    if (userExist) {
      throw new Error("Já existe um usuário cadastrado com esse email!");
    }

    const hashedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password,
    );

    return await this.userRepository.create(name, email, hashedPassword);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email ou senha inválidos.");
    }

    const hashedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password,
    );

    if (hashedPassword !== user.password) {
      throw new Error("Email ou senha inválidos.");
    }

    return user;
  }

  async findById(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async update({ id, name, email, password }: UpdateUserDTO) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists && emailAlreadyExists.id !== id) {
      throw new Error("Este email já está em uso.");
    }

    await this.userRepository.update(id, name, email, password);
  }

  async softDelete(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    await this.userRepository.softDelete(id);
  }
}
