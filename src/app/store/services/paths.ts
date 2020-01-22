export const API_BASE_PATH = '/api';

export const AUTH_PATH = `${API_BASE_PATH}/auth`;
export const LOGIN_PATH = `${AUTH_PATH}/login`;
export const SIGNUP_PATH = `${AUTH_PATH}/signup`;

export const WEBAPP_BASE_PATH = `${API_BASE_PATH}/webapp`;
export const GAMES_BASE_PATH = `${WEBAPP_BASE_PATH}/games`;
export const TOKEN_BASE_PATH = `${WEBAPP_BASE_PATH}/token`;

export const GAMES_PATH = `${GAMES_BASE_PATH}/user`;
export const FETCH_GAMES_PATH =  `${GAMES_BASE_PATH}/search`;
export const ADD_GAMES_PATH =  `${GAMES_BASE_PATH}/add`;
export const COMMON_GAMES_PATH = `${GAMES_BASE_PATH}/compare`;

export const TOKEN_PATH = `${TOKEN_BASE_PATH}/user`;
export const ADD_TOKEN_PATH =  `${TOKEN_BASE_PATH}/add`;
export const REMOVE_TOKEN_PATH =  `${TOKEN_BASE_PATH}/remove`;
