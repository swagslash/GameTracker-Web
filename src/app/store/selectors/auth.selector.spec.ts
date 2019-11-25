import {AuthResponseData} from "../model";
import {AuthState} from "../reducers/auth.reducer";
import {authenticatedUser, authenticationError, authenticationLoading} from "./auth.selector";

const userState: AuthResponseData = {
  email: 'test@test.com',
  username: 'test',
  tokenType: 'bearer',
  accessToken: 'token',
  expiresIn: 1234,
};

const initialState: AuthState = {
  currentUser: userState,
  loading: false,
  error: undefined,
};

describe('AuthSelector', () => {
  it('should select the authenticated user', () => {
    expect(authenticatedUser.projector(initialState)).toBe(userState);
  });

  it('should select the loading state', () => {
    expect(authenticationLoading.projector(initialState)).toBe(initialState.loading);
  });

  it('should select the error state', () => {
    expect(authenticationError.projector(initialState)).toBe(initialState.error);
  });
});
