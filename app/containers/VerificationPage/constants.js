/*
 *
 * VerificationPage constants
 *
 */

export const DEFAULT_ACTION = 'app/VerificationPage/DEFAULT_ACTION';

export const SEND_VERIFICATION_EMAIL =
  'app/VerificationPage/SEND_VERIFICATION_EMAIL';
export const SEND_VERIFICATION_EMAIL_ERROR =
  'app/VerificationPage/SEND_VERIFICATION_EMAIL_ERROR';
export const SEND_VERIFICATION_EMAIL_SUCCESS =
  'app/VerificationPage/SEND_VERIFICATION_EMAIL_SUCCESS';

export const VERIFY_EMAIL = 'app/VerificationPage/VERIFY_EMAIL';
export const VERIFY_EMAIL_ERROR = 'app/VerificationPage/VERIFY_EMAIL_ERROR';
export const VERIFY_EMAIL_SUCCESS = 'app/VerificationPage/VERIFY_EMAIL_SUCCESS';

export const SET_EMAIL = 'app/VerificationPage/SET_EMAIL';

export const CLEANUP_STORE = 'app/VerificationPage/CLEANUP_STORE';

export const WebService = {
  SEND_VERIFICATION_EMAIL_ENDPOINT: '/Auth/email/verification/send',
  VERIFY_EMAIL_ENDPOINT: '/Auth/email/verification/verify',
};
