interface AuthResponseData {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  email: string;
  username: string;
}

interface AuthSignUpRequestData {
  email: string;
  username: string;
  password: string;
}

interface AuthLoginRequestData {
  email: string;
  password;
}
