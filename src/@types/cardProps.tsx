export type CardProps = {
  id: number;
  title: string;
  description: string | null;
  flag: "urgente" | "medio" | "baixo";
  completed: number;
};
