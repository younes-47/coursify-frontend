/**
 *
 * UserQuizPage
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import * as selectors from './selectors';
import * as actions from './actions';
import MultiChoiceQuestion from '../../components/MultiChoiceQuestion';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';
import { StyledButton } from '../../components/Styled/StyledButton';

const mapStateToProps = createStructuredSelector({
  courseQuiz: selectors.makeSelectCourseQuiz(),
  gettingCourseQuiz: selectors.makeSelectGettingCourseQuiz(),
  getCourseQuizError: selectors.makeSelectGetCourseQuizError(),

  quizForm: selectors.makeSelectQuizForm(),

  submittingQuizForm: selectors.makeSelectSubmittingQuiz(),
  submitQuizError: selectors.makeSelectSubmitQuizError(),
  quizResult: selectors.makeSelectQuizResult(),
});

export function UserQuizPage() {
  useInjectReducer({ key: 'userQuizPage', reducer });
  useInjectSaga({ key: 'userQuizPage', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    courseQuiz,
    gettingCourseQuiz,
    getCourseQuizError,
    quizForm,
    submittingQuizForm,
    submitQuizError,
    quizResult,
  } = useSelector(mapStateToProps);

  useEffect(() => {
    if (courseId === undefined) {
      navigate('/mycourses', { replace: true });
    }
  }, [courseId]);

  useEffect(() => {
    if (courseQuiz === null && courseId !== undefined) {
      dispatch(actions.getCourseQuiz(courseId));
    }
  }, [courseQuiz, courseId]);

  useEffect(() => {
    if (courseQuiz !== null && quizForm === null) {
      const answers = courseQuiz.questions.map((question) => ({
        questionId: question.questionId,
        answerId: null,
      }));
      const data = {
        id: courseQuiz.id,
        answers,
      };
      dispatch(actions.setQuizForm(data));
    }
  }, [courseQuiz, quizForm]);

  useEffect(() => {
    if (quizResult !== null) {
      navigate('/Quiz/result', {
        state: { from: '/Quiz', result: quizResult },
      });
    }
  }, [quizResult]);

  useEffect(() => () => dispatch(actions.cleanupStore()), []);

  return (
    <>
      <Typography level="h4">
        Le quiz permettra de valider vos connaissances
      </Typography>
      <Typography level="title-md" color="neutral">
        Course : {courseQuiz?.courseTitle}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginTop={8}
      >
        {courseQuiz?.questions?.map((question, index) => (
          <MultiChoiceQuestion
            key={index}
            data={question}
            update={actions.updateQuizAnswers}
          />
        ))}
      </Box>

      <CenteredContainer>
        <StyledButton
          color="darkOrange"
          onClick={() => dispatch(actions.submitQuiz(quizForm))}
          disabled={
            quizForm === null ||
            submittingQuizForm ||
            quizForm?.answers?.some((answer) => answer.answerId === null)
          }
        >
          Soumettre les réponses
        </StyledButton>
      </CenteredContainer>
    </>
  );
}

UserQuizPage.propTypes = {};

export default UserQuizPage;
