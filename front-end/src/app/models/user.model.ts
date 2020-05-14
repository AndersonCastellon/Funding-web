export interface User {
  _id?: string;
  name: string;
  email: string;
  role?: string;
  photo?: string;
  password?: string;
  active?: boolean;
  category?: string;
  google?: boolean;
  type?: string;
  created_at?: Date;
  updated_at?: Date;
}
