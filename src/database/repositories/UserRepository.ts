import { User } from "../../@types/user";
import { database } from "../db";
import bcrypt from "bcryptjs";

export class UserRepository {
  async create(name: string, email: string, password: string) {
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await database.runAsync(
        `
            INSERT INTO users
            (name, email, password)
            VALUES (?,?,?)
        `,
        [name, email, hashPassword],
    );

    return result.lastInsertRowId;
  }

  async findById(id: number) {
    const result = await database.getFirstAsync<User>(
        `
            SELECT *
            FROM users
            WHERE id = ?
            AND deleted_at IS NULL
        `,
        [id],
    );

    return result;
  }

  async findByEmail(email: string) {
    const result = await database.getFirstAsync<User>(
        `
            SELECT *
            FROM users
            WHERE email = ? 
            AND deleted_at IS NULL
        `,
        [email],
    );

    return result;
  }

  async findAll() {
    const result = await database.getAllAsync<User>(
        `
            SELECT *
            FROM users
            WHERE deleted_at IS NULL
        `,
    );

    return result;
  }

  async update(id: number, name: string, email: string, password: string) {
    await database.runAsync(
        `
            UPDATE users
            SET
                name = ?,
                email = ?,
                passsword = ?
            WHERE id = ?
        `,
        [name, email, password, id],
    );
  }

  async softDelete(id: number) {
    await database.runAsync(
        `
            UPDATE users
            SET deleted_at = datetime('now')
            WHERE id = ?
        `
    )
  }
}
