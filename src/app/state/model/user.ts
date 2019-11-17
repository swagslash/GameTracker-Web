export interface User {
  email: string;
  username: string;
  token?: string;
  expiresIn: number;
}
