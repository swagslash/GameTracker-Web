import {AuthLoginRequestData, AuthResponseData, AuthSignUpRequestData} from '../model';
import {AuthState} from '../reducers/auth.reducer';

const responseData: AuthResponseData = {
  email: 'test@test.com',
  username: 'test',
  tokenType: 'bearer',
  accessToken: 'token',
  expiresIn: 1234,
};

const loginData: AuthLoginRequestData = {
  email: 'test@test.com',
  password: '1234',
};

const signUpData: AuthSignUpRequestData = {
  email: 'test@test.com',
  username: 'test',
  password: '1234',
};

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
  error: undefined,
};

const authenticatedState: AuthState = {
  ...initialState,
  currentUser: responseData,
};

const loadingState: AuthState = {
  ...initialState,
  loading: true,
};

const errorState: AuthState = {
  ...initialState,
  error: 'error',
};

export const authDataMocks = {
  responseData,
  loginData,
  signUpData,
  initialState,
  authenticatedState,
  loadingState,
  errorState,
};
