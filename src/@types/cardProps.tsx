export type CardProps = {
  id: number;
  title: string;
  description: string;
  flag: 'urgente' | 'medio' | 'baixo' | 'concluido';
};
