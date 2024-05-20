/*
 *
 * UserCourseContent reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_COURSE_CONTENT,
  GET_COURSE_CONTENT_ERROR,
  GET_COURSE_CONTENT_SUCCESS,
  MARK_AS_COMPLETED,
  MARK_AS_COMPLETED_ERROR,
  MARK_AS_COMPLETED_SUCCESS,
  MARK_AS_INCOMPLETE,
  MARK_AS_INCOMPLETE_ERROR,
  MARK_AS_INCOMPLETE_SUCCESS,
} from './constants';

export const initialState = {
  courseContent: null,
  gettingCourseContent: false,
  gettingCourseContentError: null,

  markingAsCompleted: false,
  markingAsCompletedError: null,

  markingAsIncomplete: false,
  markingAsIncompleteError: null,
};

/* eslint-disable default-case, no-param-reassign */
const userCourseContentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COURSE_CONTENT:
        draft.gettingCourseContent = true;
        draft.gettingCourseContentError = null;
        break;
      case GET_COURSE_CONTENT_SUCCESS:
        draft.gettingCourseContent = false;
        draft.courseContent = action.data;
        draft.gettingCourseContentError = null;
        break;
      case GET_COURSE_CONTENT_ERROR:
        draft.gettingCourseContent = false;
        draft.gettingCourseContentError = action.error;
        break;
      case MARK_AS_COMPLETED:
        draft.markingAsCompleted = true;
        draft.markingAsCompletedError = null;
        break;
      case MARK_AS_COMPLETED_SUCCESS:
        draft.markingAsCompleted = false;
        draft.markingAsCompletedError = false;
        break;
      case MARK_AS_COMPLETED_ERROR:
        draft.markingAsCompleted = false;
        draft.markingAsCompletedError = true;
        break;
      case MARK_AS_INCOMPLETE:
        draft.markingAsIncomplete = true;
        draft.markingAsIncompleteError = null;
        break;
      case MARK_AS_INCOMPLETE_SUCCESS:
        draft.markingAsIncomplete = false;
        draft.markingAsIncompleteError = false;
        break;
      case MARK_AS_INCOMPLETE_ERROR:
        draft.markingAsIncomplete = false;
        draft.markingAsIncompleteError = true;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userCourseContentReducer;
