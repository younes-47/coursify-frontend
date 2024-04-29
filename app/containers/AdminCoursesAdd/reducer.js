/*
 *
 * AdminCoursesAdd reducer
 *
 */
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_COURSE,
  ADD_COURSE_ERROR,
  ADD_COURSE_SUCCESS,
  ADD_EVALUATION_QUESTION,
  ADD_QUIZ_QUESTION,
  ADD_SECTION,
  CLEANUP_STORE,
  DEFAULT_ACTION,
  GET_COURSE_CATEGORIES,
  GET_COURSE_CATEGORIES_ERROR,
  GET_COURSE_CATEGORIES_SUCCESS,
  REMOVE_EVALUATION_QUESTION,
  REMOVE_QUIZ_QUESTION,
  REMOVE_SECTION,
  SET_COURSE_INFO,
  UPDATE_EVALUATION_QUESTION,
  UPDATE_QUIZ_QUESTION,
  UPDATE_SECTION,
} from './constants';

export const initialState = {
  courseInfo: {
    courseTitle: '',
    courseCategoryId: null,
    courseDescription: '',
  },
  sections: [
    {
      id: 0,
      title: '',
      slides: null,
      documents: null,
    },
  ],
  evaluationQuestions: [
    {
      id: 0,
      question: '',
      answers: [
        {
          id: 1,
          answer: '',
          isCorrect: false,
        },
        {
          id: 2,
          answer: '',
          isCorrect: false,
        },
        {
          id: 3,
          answer: '',
          isCorrect: false,
        },
        {
          id: 4,
          answer: '',
          isCorrect: false,
        },
      ],
    },
  ],
  quizQuestions: [
    {
      id: 0,
      question: '',
      answers: [
        {
          id: 1,
          answer: '',
          isCorrect: false,
        },
        {
          id: 2,
          answer: '',
          isCorrect: false,
        },
        {
          id: 3,
          answer: '',
          isCorrect: false,
        },
        {
          id: 4,
          answer: '',
          isCorrect: false,
        },
      ],
    },
  ],
  addingCourse: false,
  addCourseSuccess: false,
  addCourseError: null,
  gettingCourseCategories: false,
  courseCategories: null,
  getCourseCategoriesError: null,
};

/* eslint-disable default-case, no-param-reassign */
const adminCoursesAddReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_COURSE_INFO: {
        draft.courseInfo[action.field] = action.value;
        break;
      }
      case ADD_SECTION: {
        const sectionId = uuidv4();
        const newSection = {
          id: sectionId,
          title: '',
          slides: null,
          documents: null,
        };
        draft.sections.push(newSection);
        break;
      }
      case REMOVE_SECTION: {
        const updatedExpenses = draft.sections.filter(
          (section) => section.id !== action.sectionId,
        );
        draft.sections = updatedExpenses;
        break;
      }
      case UPDATE_SECTION: {
        const sectionIndex = draft.sections.findIndex(
          (section) => section.id === action.sectionId,
        );
        draft.sections[sectionIndex][action.field] = action.value;
        break;
      }
      case ADD_EVALUATION_QUESTION: {
        const newQuestion = {
          id: uuidv4(),
          question: '',
          answers: [
            {
              id: 1,
              answer: '',
              isCorrect: false,
            },
            {
              id: 2,
              answer: '',
              isCorrect: false,
            },
            {
              id: 3,
              answer: '',
              isCorrect: false,
            },
            {
              id: 4,
              answer: '',
              isCorrect: false,
            },
          ],
        };
        draft.evaluationQuestions.push(newQuestion);
        break;
      }
      case REMOVE_EVALUATION_QUESTION: {
        const updatedQuestions = draft.evaluationQuestions.filter(
          (question) => question.id !== action.questionId,
        );
        draft.evaluationQuestions = updatedQuestions;
        break;
      }
      case UPDATE_EVALUATION_QUESTION: {
        const questionIndex = draft.evaluationQuestions.findIndex(
          (question) => question.id === action.questionId,
        );
        draft.evaluationQuestions[questionIndex][action.field] = action.value;
        break;
      }
      case ADD_QUIZ_QUESTION: {
        const newQuestion = {
          id: uuidv4(),
          question: '',
          answers: [
            {
              id: 1,
              answer: '',
              isCorrect: false,
            },
            {
              id: 2,
              answer: '',
              isCorrect: false,
            },
            {
              id: 3,
              answer: '',
              isCorrect: false,
            },
            {
              id: 4,
              answer: '',
              isCorrect: false,
            },
          ],
        };
        draft.quizQuestions.push(newQuestion);
        break;
      }
      case REMOVE_QUIZ_QUESTION: {
        const updatedQuestions = draft.quizQuestions.filter(
          (question) => question.id !== action.questionId,
        );
        draft.quizQuestions = updatedQuestions;
        break;
      }
      case UPDATE_QUIZ_QUESTION: {
        const questionIndex = draft.quizQuestions.findIndex(
          (question) => question.id === action.questionId,
        );
        draft.quizQuestions[questionIndex][action.field] = action.value;
        break;
      }
      case ADD_COURSE:
        draft.addingCourse = true;
        break;
      case ADD_COURSE_SUCCESS:
        draft.addCourseSuccess = true;
        draft.addCourseError = null;
        draft.addingCourse = false;
        break;
      case ADD_COURSE_ERROR:
        draft.addCourseError = action.error;
        draft.addCourseSuccess = false;
        draft.addingCourse = false;
        break;
      case GET_COURSE_CATEGORIES:
        draft.gettingCourseCategories = true;
        draft.getCourseCategoriesError = null;
        draft.courseCategories = null;
        break;
      case GET_COURSE_CATEGORIES_SUCCESS:
        draft.courseCategories = action.data;
        draft.gettingCourseCategories = false;
        draft.getCourseCategoriesError = null;
        break;
      case GET_COURSE_CATEGORIES_ERROR:
        draft.getCourseCategoriesError = action.error;
        draft.gettingCourseCategories = false;
        draft.courseCategories = null;
        break;
      case CLEANUP_STORE:
        return initialState;
    }
  });

export default adminCoursesAddReducer;
