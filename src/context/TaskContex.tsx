import { createContext, useContext, useState, ReactNode } from "react";

import { TaskService } from "../services/TaskService";
import { CardProps } from "../@types/cardProps";
import { CreateTaskDTO } from "../@types/task/CreateTaskDTO";

type TaskContextData = {
  tasks: CardProps[];

  loadTasks: (userId: number) => Promise<void>;

  createTask: (data: CreateTaskDTO) => Promise<void>;

  deleteTask: (id: number) => Promise<void>;

  toggleCompleted: (
    id: number,
    userId: number,
    completed: number,
  ) => Promise<void>;
};

type TaskProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<CardProps[]>([]);

  const taskService = new TaskService();

  async function loadTasks(userId: number) {
    const tasksFromDatabase = await taskService.findAllByUser(userId);

    setTasks(tasksFromDatabase);
  }

  async function createTask(data: CreateTaskDTO) {
    await taskService.create(data);

    const tasksFromDatabase = await taskService.findAllByUser(data.userId);

    setTasks(tasksFromDatabase);
  }

  async function toggleCompleted(
    id: number,
    userId: number,
    completed: number,
  ) {
    await taskService.toggleCompleted(id, completed);

    await loadTasks(userId);
  }

  async function deleteTask(id: number) {
    await taskService.delete(id);

    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        createTask,
        toggleCompleted,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
