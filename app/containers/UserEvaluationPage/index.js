/**
 *
 * UserEvaluationPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/joy';
import makeSelectUserEvaluationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import * as actions from './actions';
import * as selectors from './selectors';
import MultiChoiceQuestion from '../../components/MultiChoiceQuestion';
import { StyledButton } from '../../components/Styled/StyledButton';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';

const mapStateToProps = createStructuredSelector({
  courseEvaluation: selectors.makeSelectCourseEvaluation(),
  gettingCourseEvaluation: selectors.makeSelectGettingCourseEvaluation(),
  getCourseEvaluationError: selectors.makeSelectGetCourseEvaluationError(),

  evaluationForm: selectors.makeSelectEvaluationForm(),

  submittingEvaluationForm: selectors.makeSelectSubmittingEvaluation(),
  submitEvaluationError: selectors.makeSelectSubmitEvaluationError(),
  evaluationResult: selectors.makeSelectEvaluationResult(),
});

export function UserEvaluationPage() {
  useInjectReducer({ key: 'userEvaluationPage', reducer });
  useInjectSaga({ key: 'userEvaluationPage', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    courseEvaluation,
    gettingCourseEvaluation,
    getCourseEvaluationError,
    evaluationForm,
    submittingEvaluationForm,
    submitEvaluationError,
    evaluationResult,
  } = useSelector(mapStateToProps);

  useEffect(() => {
    if (
      courseId === undefined ||
      location?.state?.from !== `/enroll/${courseId}`
    ) {
      navigate('/enroll', { replace: true });
    }
  }, [courseId, location]);

  useEffect(() => {
    if (courseEvaluation === null && courseId !== undefined) {
      dispatch(actions.getCourseEvaluation(courseId));
    }
  }, [courseId, courseEvaluation]);

  useEffect(() => {
    if (courseEvaluation !== null && evaluationForm === null) {
      const answers = courseEvaluation.questions.map((question) => ({
        questionId: question.questionId,
        answerId: null,
      }));
      const data = {
        id: courseEvaluation.id,
        answers,
      };
      dispatch(actions.setEvaluationForm(data));
    }
  }, [courseEvaluation, evaluationForm]);

  useEffect(() => {
    if (evaluationResult !== null) {
      navigate('/evaluation/result', {
        state: { from: '/evaluate', result: evaluationResult },
      });
    }
  }, [evaluationResult]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );

  return (
    <>
      <Typography level="h4">
        Passer cette évaluation pour pouvoir inscrire au course :{' '}
        <Typography color="primary" level="h4">
          {courseEvaluation?.courseTitle}
        </Typography>
      </Typography>
      <Typography level="title-md" color="neutral">
        Vous deverez obtenir au moins 60%
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginTop={8}
      >
        {courseEvaluation?.questions?.map((question, index) => (
          <MultiChoiceQuestion
            key={index}
            data={question}
            update={actions.updateEvaluationAnswers}
          />
        ))}
      </Box>

      <CenteredContainer>
        <StyledButton
          color="darkOrange"
          onClick={() => dispatch(actions.submitEvaluation(evaluationForm))}
          disabled={
            evaluationForm === null ||
            submittingEvaluationForm ||
            evaluationForm?.answers?.some((answer) => answer.answerId === null)
          }
        >
          Soumettre les réponses
        </StyledButton>
      </CenteredContainer>
    </>
  );
}

UserEvaluationPage.propTypes = {};

export default UserEvaluationPage;
