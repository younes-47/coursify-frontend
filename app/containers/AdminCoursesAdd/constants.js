/*
 *
 * AdminCoursesAdd constants
 *
 */

export const DEFAULT_ACTION = 'app/AdminCoursesAdd/DEFAULT_ACTION';

// INFORMATIONS

export const SET_COURSE_INFO = 'app/AdminCoursesAdd/SET_COURSE_INFO';

// SECTIONS

export const ADD_SECTION = 'app/AdminCoursesAdd/ADD_SECTION';
export const REMOVE_SECTION = 'app/AdminCoursesAdd/REMOVE_SECTION';
export const UPDATE_SECTION = 'app/AdminCoursesAdd/UPDATE_SECTION';

// EVALUATION

export const ADD_EVALUATION_QUESTION =
  'app/AdminCoursesAdd/ADD_EVALUATION_QUESTION';
export const REMOVE_EVALUATION_QUESTION =
  'app/AdminCoursesAdd/REMOVE_EVALUATION_QUESTION';
export const UPDATE_EVALUATION_QUESTION =
  'app/AdminCoursesAdd/UPDATE_EVALUATION_QUESTION';

// QUIZ

export const ADD_QUIZ_QUESTION = 'app/AdminCoursesAdd/ADD_QUIZ_QUESTION';
export const REMOVE_QUIZ_QUESTION = 'app/AdminCoursesAdd/REMOVE_QUIZ_QUESTION';
export const UPDATE_QUIZ_QUESTION = 'app/AdminCoursesAdd/UPDATE_QUIZ_QUESTION';

// API CALLS

export const ADD_COURSE = 'app/AdminCoursesAdd/ADD_COURSE';
export const ADD_COURSE_SUCCESS = 'app/AdminCoursesAdd/ADD_COURSE_SUCCESS';
export const ADD_COURSE_ERROR = 'app/AdminCoursesAdd/ADD_COURSE_ERROR';

export const GET_COURSE_CATEGORIES =
  'app/AdminCoursesAdd/GET_COURSE_CATEGORIES';
export const GET_COURSE_CATEGORIES_SUCCESS =
  'app/AdminCoursesAdd/GET_COURSE_CATEGORIES_SUCCESS';
export const GET_COURSE_CATEGORIES_ERROR =
  'app/AdminCoursesAdd/GET_COURSE_CATEGORIES_ERROR';

export const CLEANUP_STORE = 'app/AdminCoursesAdd/CLEANUP_STORE';

export const WebService = {
  ADD_COURSE_ENDPOINT: 'Admin/course/add',
  GET_COURSE_CATEGORIES_ENDPOINT: 'Admin/course/categories',
};
