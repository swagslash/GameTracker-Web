export interface AuthResponseData {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  email: string;
  username: string;
}

export interface AuthSignUpRequestData {
  email: string;
  username: string;
  password: string;
}

export interface AuthLoginRequestData {
  email: string;
  password;
}
