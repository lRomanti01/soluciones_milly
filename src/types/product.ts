export interface products {
  id: string;
  name: string;
  category_id?: number;
  description: string;
  img?: string;
  imgs?: string[];
  price: number;
  data?: any;
}