/**
 *
 * UserMyCoursesPage
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import InfoIcon from '@mui/icons-material/Info';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LinearProgress from '@mui/joy/LinearProgress';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import * as actions from './actions';
import * as selectors from './selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
import NoResultFound from '../../components/NoResultFound';
import { StyledButton } from '../../components/Styled/StyledButton';
import coursePlaceholder from '../../images/cover-placeholder.png';

const mapStateToProps = createStructuredSelector({
  gettingEnrolledCourses: selectors.makeSelectGettingEnrolledCourses(),
  enrolledCourses: selectors.makeSelectEnrolledCourses(),
  errorGettingEnrolledCourses:
    selectors.makeSelectErrorGettingEnrolledCourses(),
});

const getCourseCover = (cover) => {
  if (cover === null) return coursePlaceholder;
  return `data:image/png;base64,${cover}`;
};

export function UserMyCoursesPage() {
  useInjectReducer({ key: 'userMyCoursesPage', reducer });
  useInjectSaga({ key: 'userMyCoursesPage', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    gettingEnrolledCourses,
    enrolledCourses,
    errorGettingEnrolledCourses,
  } = useSelector(mapStateToProps);

  useEffect(() => {
    if (enrolledCourses === null) dispatch(actions.getEnrolledCourses());
  }, [enrolledCourses]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );

  return (
    <>
      <Typography level="h4" marginBottom={3}>
        Continuer votre e-learning !
      </Typography>
      {/* eslint-disable-next-line no-nested-ternary */}
      {gettingEnrolledCourses ? (
        <LoadingIndicator />
      ) : enrolledCourses?.length > 0 ? (
        <Grid
          container
          direction="row"
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'flex-start',
            lg: 'flex-start',
          }}
          alignItems="center"
        >
          {enrolledCourses?.map((course) => (
            <Grid
              xs={12}
              sm={8}
              md={6}
              lg={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
              key={course?.id}
            >
              <Card sx={{ width: '100%', maxWidth: '350px', margin: '1em' }}>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img
                    src={getCourseCover(course?.cover)}
                    alt="Course couverture"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AspectRatio>
                <CardContent>
                  <Typography level="h4">{course?.title}</Typography>
                  <Typography level="body-sm" color="neutral">
                    {course?.category}
                  </Typography>
                </CardContent>
                <CardOverflow>
                  <Typography level="body-xs" color="success">
                    {course?.progress}% Complété
                  </Typography>
                  <LinearProgress
                    determinate
                    variant="soft"
                    color="success"
                    thickness={7}
                    value={course?.progress}
                    sx={{ marginBottom: '0.7em' }}
                  ></LinearProgress>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {course?.isCompleted === true ? (
                    course?.highestQuizScore === null ? (
                      <Chip color="warning" startDecorator={<LightbulbIcon />}>
                        Vous n'avais jamais passer un quiz
                      </Chip>
                    ) : (
                      <Chip
                        color="success"
                        startDecorator={<SportsScoreIcon />}
                      >
                        {course?.highestQuizScore}% Score le plus élevé au quiz
                      </Chip>
                    )
                  ) : (
                    <Chip color="primary" startDecorator={<InfoIcon />}>
                      Complétez le cours pour passer le quiz
                    </Chip>
                  )}
                </CardOverflow>
                <CardActions>
                  <StyledButton
                    style={{ width: '100%' }}
                    color="lightGreen"
                    onClick={() =>
                      navigate(`/course/content/${course?.id}`, {
                        state: { from: location.pathname },
                      })
                    }
                  >
                    Continuer
                  </StyledButton>
                  <StyledButton
                    style={{ width: '100%' }}
                    color="lightBrown"
                    disabled={course?.isCompleted === false}
                    onClick={() =>
                      navigate(`/Quiz/${course?.id}`, {
                        state: { from: location.pathname },
                      })
                    }
                  >
                    Quiz
                  </StyledButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoResultFound
          message="Vous n'êtes inscrit à aucune course pour le moment"
          color="darkGray"
        />
      )}
    </>
  );
}

UserMyCoursesPage.propTypes = {};

export default UserMyCoursesPage;
