/*
 *
 * UserCourseDetailsPage reducer
 *
 */
import produce from 'immer';
import {
  CLEANUP_STORE,
  GET_COURSE_DETAILS,
  GET_COURSE_DETAILS_ERROR,
  GET_COURSE_DETAILS_SUCCESS,
} from './constants';

export const initialState = {
  gettingCourseDetails: false,
  courseDetails: null,
  errorGettingCourseDetails: null,
};

/* eslint-disable default-case, no-param-reassign */
const userCourseDetailsPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_COURSE_DETAILS:
        draft.gettingCourseDetails = true;
        draft.errorGettingCourseDetails = null;
        break;
      case GET_COURSE_DETAILS_SUCCESS:
        draft.gettingCourseDetails = false;
        draft.courseDetails = action.data;
        draft.errorGettingCourseDetails = false;
        break;
      case GET_COURSE_DETAILS_ERROR:
        draft.gettingCourseDetails = false;
        draft.errorGettingCourseDetails = action.error;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default userCourseDetailsPageReducer;
