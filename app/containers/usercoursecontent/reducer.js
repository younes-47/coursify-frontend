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
} from './constants';

export const initialState = {
  courseContent: null,
  gettingCourseContent: false,
  gettingCourseContentError: null,
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
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userCourseContentReducer;
