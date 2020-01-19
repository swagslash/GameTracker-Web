import {tokenError, tokenLoading, tokens} from './token.selector';
import {tokenDataMocks} from '../testing/token-mock';

describe('TokenSelector', () => {
  it('should select token', () => {
    expect(tokens.projector(tokenDataMocks.tokenState))
      .toBe(tokenDataMocks.tokenState.tokens);
  });

  it('should select the loading state', () => {
    expect(tokenLoading.projector(tokenDataMocks.loadingState))
      .toBe(tokenDataMocks.loadingState.loading);
  });

  it('should select the error state', () => {
    expect(tokenError.projector(tokenDataMocks.errorState))
      .toBe(tokenDataMocks.errorState.error);
  });
});
