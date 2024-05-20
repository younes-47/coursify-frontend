/*
 *
 * UserCourseContent constants
 *
 */

export const GET_COURSE_CONTENT = 'app/UserCourseContent/GET_COURSE_CONTENT';
export const GET_COURSE_CONTENT_SUCCESS =
  'app/UserCourseContent/GET_COURSE_CONTENT_SUCCESS';
export const GET_COURSE_CONTENT_ERROR =
  'app/UserCourseContent/GET_COURSE_CONTENT_ERROR';

export const MARK_AS_COMPLETED = 'app/UserCourseContent/MARK_AS_COMPLETED';
export const MARK_AS_COMPLETED_SUCCESS =
  'app/UserCourseContent/MARK_AS_COMPLETED_SUCCESS';
export const MARK_AS_COMPLETED_ERROR =
  'app/UserCourseContent/MARK_AS_COMPLETED_ERROR';

export const MARK_AS_INCOMPLETE = 'app/UserCourseContent/MARK_AS_INCOMPLETE';
export const MARK_AS_INCOMPLETE_SUCCESS =
  'app/UserCourseContent/MARK_AS_INCOMPLETE_SUCCESS';
export const MARK_AS_INCOMPLETE_ERROR =
  'app/UserCourseContent/MARK_AS_INCOMPLETE_ERROR';

export const CLEANUP_STORE = 'app/UserCourseContent/CLEANUP_STORE';

export const WebService = {
  GET_COURSE_CONTENT_ENDPOINT: 'User/course/content',
  MARK_AS_COMPLETED_ENDPOINT: 'User/course/section/complete',
  MARK_AS_INCOMPLETE_ENDPOINT: 'User/course/section/incomplete',
};
