export type UpdateTaskDTO = {
  id: number;
  title: string;
  description: string;
  flag: "urgente" | "medio" | "baixo";
};