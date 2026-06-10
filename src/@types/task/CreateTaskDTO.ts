export type CreateTaskDTO = {
  userId: number;
  title: string;
  description: string;
  flag: "urgente" | "medio" | "baixo";
};