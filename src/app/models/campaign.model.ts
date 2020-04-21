export interface Campaign {
  id?: string;
  title: string;
  photo?: string;
  category: string;
  description: string;
  status: string;
  date: number;
  finish?: number;
  userId?: string;
  targetQuantity: number;
  currentQuantity: number;
  goalType?: number;
}
