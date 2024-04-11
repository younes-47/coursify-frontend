/*
 *
 * PasswordResetPage constants
 *
 */

export const DEFAULT_ACTION = 'app/PasswordResetPage/DEFAULT_ACTION';
export const SET_EMAIL = 'app/PasswordResetPage/SET_EMAIL';
export const SET_NEW_PASSWORD = 'app/PasswordResetPage/SET_NEW_PASSWORD';
export const SEND_RESET_PASSWORD_EMAIL =
  'app/PasswordResetPage/SEND_RESET_PASSWORD_EMAIL';
export const SEND_RESET_PASSWORD_EMAIL_SUCCESS =
  'app/PasswordResetPage/SEND_RESET_PASSWORD_EMAIL_SUCCESS';
export const SEND_RESET_PASSWORD_EMAIL_ERROR =
  'app/PasswordResetPage/SEND_RESET_PASSWORD_EMAIL_ERROR';

export const VERIFY_RESET_PASSWORD_TOKEN =
  'app/PasswordResetPage/VERIFY_RESET_PASSWORD_TOKEN';
export const VERIFY_RESET_PASSWORD_TOKEN_SUCCESS =
  'app/PasswordResetPage/VERIFY_RESET_PASSWORD_TOKEN_SUCCESS';
export const VERIFY_RESET_PASSWORD_TOKEN_ERROR =
  'app/PasswordResetPage/VERIFY_RESET_PASSWORD_TOKEN_ERROR';

export const RESET_PASSWORD = 'app/PasswordResetPage/RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS =
  'app/PasswordResetPage/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR =
  'app/PasswordResetPage/RESET_PASSWORD_ERROR';

export const CLEANUP_STORE = 'app/PasswordResetPage/CLEANUP_STORE';

export const WebService = {
  SEND_RESET_PASSWORD_EMAIL_ENDPOINT: '/Auth/Email/password-reset/send',
  VERIFY_RESET_PASSWORD_TOKEN_ENDPOINT: '/Auth/Password-reset/verify-token',
  RESET_PASSWORD_ENDPOINT: '/Auth/Password-reset/reset',
};
