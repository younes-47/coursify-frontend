/**
 *
 * UserEnrollPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  AspectRatio,
  Box,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/joy';
import { useLocation, useNavigate } from 'react-router-dom';
import makeSelectUserEnrollPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { StyledButton } from '../../components/Styled/StyledButton';
import * as selectors from './selectors';
import * as actions from './actions';
import LoadingIndicator from '../../components/LoadingIndicator';
import coursePlaceholder from '../../images/cover-placeholder.png';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

const mapStateToProps = createStructuredSelector({
  availableCourses: selectors.makeSelectAvailableCourses(),
  gettingAvailableCourses: selectors.makeSelectGettingAvailableCourses(),
  getAvailableCoursesError: selectors.makeSelectGetAvailableCoursesError(),
});

const getCourseCover = (cover) => {
  if (cover === null) return coursePlaceholder;
  return `data:image/png;base64,${cover}`;
};

export function UserEnrollPage() {
  useInjectReducer({ key: 'userEnrollPage', reducer });
  useInjectSaga({ key: 'userEnrollPage', saga });
  useAxiosPrivate();

  const {
    availableCourses,
    gettingAvailableCourses,
    getAvailableCoursesError,
  } = useSelector(mapStateToProps);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (availableCourses === null) {
      dispatch(actions.getAvailableCourses());
    }
  }, [availableCourses]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );

  return (
    <>
      <Stack sx={{ marginBottom: '2em' }}>
        <Typography level="h4">
          S&apos;inscrire à l&apos;un de nos cours en ligne
        </Typography>
        <Typography level="title-md" color="neutral">
          Prospérez avec les compétences les plus demandées gratuitement
        </Typography>
      </Stack>

      {gettingAvailableCourses === true ? (
        <LoadingIndicator />
      ) : (
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
          {availableCourses?.map((course) => (
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
                  <Stack spacing={1} direction="row">
                    <Chip color="primary" variant="soft">
                      {course?.totalSections} sections
                    </Chip>
                    <Chip color="success" variant="soft">
                      {course?.totalSlides} slides
                    </Chip>
                    <Chip color="warning" variant="soft">
                      {course?.totalDocuments} Documents
                    </Chip>
                  </Stack>
                </CardOverflow>
                <CardActions>
                  <StyledButton
                    style={{ width: '100%' }}
                    color="lightPurple"
                    disabled={course?.isEnrolled}
                    onClick={() =>
                      navigate(`/enroll/${course?.id}`, {
                        state: { from: location.pathname },
                      })
                    }
                  >
                    {course?.isEnrolled ? 'Inscrit' : "S'inscrire"}
                  </StyledButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

UserEnrollPage.propTypes = {};

export default UserEnrollPage;
