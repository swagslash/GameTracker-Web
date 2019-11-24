export interface User {
  email: string;
  username: string;
  token?: string;
  tokenType?: string;
  expiresIn?: number;
}
