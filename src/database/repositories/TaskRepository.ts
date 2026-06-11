import { Task } from "../../@types/task/task";
import { database } from "../db";

export class TaskRepository {
  async create(userId: number, title: string, description: string, flag: string) {
    const result = await database.runAsync(
        `
        INSERT INTO tasks (
            user_id,
            title,
            description,
            flag
        )
        VALUES (?, ?, ?, ?)
        `,
        [userId, title, description, flag]
    );

    return result.lastInsertRowId;
  }

  async findById(id: number) {
    const result = await database.getFirstAsync<Task>(
        `
        SELECT *
        FROM tasks
        WHERE id = ?
        `,
        [id]
    );

    return result;
  }

  async findAllByUser(userId: number) {
    const result =  await database.getAllAsync<Task>(
        `
        SELECT *
        FROM tasks
        WHERE user_id = ?
        ORDER BY
            CASE flag
            WHEN 'urgente' THEN 1
            WHEN 'medio' THEN 2
            WHEN 'baixo' THEN 3
            END
        `,
        [userId]
    );

    return result;
  }

  async findCompletedByUser(userId: number) {
    const result =  await database.getAllAsync<Task>(
        `
        SELECT *
        FROM tasks
        WHERE
            user_id = ?
            AND completed = 1
        `,
        [userId]
    );

    return result;
  }

  async findPendingByUser(userId: number) {
    const result =  await database.getAllAsync<Task>(
      `
      SELECT *
      FROM tasks
      WHERE
        user_id = ?
        AND completed = 0
      `,
      [userId]
    );

    return result;
  }

  async update(id: number, title: string, description: string, flag: string ) {
    await database.runAsync(
        `
        UPDATE tasks
        SET
            title = ?,
            description = ?,
            flag = ?
        WHERE id = ?
        `,
        [title, description, flag, id]
    );
  }

  async complete(id: number, completed: number) {
    await database.runAsync(
      `
      UPDATE tasks
      SET completed = ?
      WHERE id = ?
      `,
      [completed, id]
    );
  }

  async reopen(id: number) {
    await database.runAsync(
        `
        UPDATE tasks
        SET completed = 0
        WHERE id = ?
        `,
        [id]
    );
  }

  async delete(id: number) {
    await database.runAsync(
        `
        DELETE FROM tasks
        WHERE id = ?
        `,
        [id]
    );
  }
}