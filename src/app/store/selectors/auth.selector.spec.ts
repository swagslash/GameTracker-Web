import {authenticatedUser, authenticationError, authenticationLoading} from './auth.selector';
import {authDataMocks} from '../testing';

describe('AuthSelector', () => {
  it('should select the authenticated user', () => {
    expect(authenticatedUser.projector(authDataMocks.authenticatedState)).toBe(authDataMocks.responseData);
  });

  it('should select the loading state', () => {
    expect(authenticationLoading.projector(authDataMocks.loadingState)).toBe(authDataMocks.loadingState.loading);
  });

  it('should select the error state', () => {
    expect(authenticationError.projector(authDataMocks.errorState)).toBe(authDataMocks.errorState.error);
  });
});
