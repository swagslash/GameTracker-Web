import {AgentToken} from '../model';
import {TokenState} from '../reducers/token.reducer';

const token1: AgentToken = {
  token: 'agentToken1',
};

const token2: AgentToken = {
  token: 'agentToken2',
};

const initialState: TokenState = {
  tokens: [],
  loading: false,
  error: undefined,
};

const tokenState: TokenState = {
  tokens: [token1, token2],
  loading: false,
  error: undefined,
};

const loadingState: TokenState = {
  tokens: [],
  loading: true,
  error: undefined,
};

const errorState: TokenState = {
  tokens: [],
  loading: false,
  error: 'error',
};

export const tokenDataMocks = {
  token: token1,
  tokens: [token1, token2],
  initialState,
  tokenState,
  loadingState,
  errorState,
};
