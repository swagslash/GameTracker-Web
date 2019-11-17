export const API_BASE_PATH = '/api/auth';

export const LOGIN_PATH = `${API_BASE_PATH}/login`;
export const SIGNUP_PATH = `${API_BASE_PATH}/signup`;

// TODO redirect url to login page
export const CLIENT_REDIRECT_URI = `/auth/login`;

const OAUTH_BASE_PATH = '/oauth/authorize';

export const GOOGLE_PATH = `${OAUTH_BASE_PATH}/google?redirect_uri=${CLIENT_REDIRECT_URI}`;
export const FACEBOOK_PATH = `${OAUTH_BASE_PATH}/facebook?redirect_uri=${CLIENT_REDIRECT_URI}`;
export const GITHUB_PATH = `${OAUTH_BASE_PATH}/github?redirect_uri=${CLIENT_REDIRECT_URI}`;
