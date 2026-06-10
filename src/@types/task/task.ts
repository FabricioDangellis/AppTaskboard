export type Task = {
  id: number;
  user_id: number;
  title: string;
  description: string | null;
  flag: "urgente" | "medio" | "baixo";
  completed: number;
};