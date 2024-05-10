/**
 *
 * UserCourseDetailsPage
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import coursePlaceholder from '../../images/cover-placeholder.png';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import * as actions from './actions';
import * as selectors from './selectors';
import StyledActionButton from '../../components/Styled/ActionButton';

const mapStateToProps = createStructuredSelector({
  courseDetails: selectors.makeSelectCourseDetails(),
  gettingCourseDetails: selectors.makeSelectGettingCourseDetails(),
  errorGettingCourseDetails: selectors.makeSelectErrorGettingCourseDetails(),
});

const getCourseCover = (cover) => {
  if (cover === null) return coursePlaceholder;
  return `data:image/png;base64,${cover}`;
};

export function UserCourseDetailsPage() {
  useInjectReducer({ key: 'userCourseDetailsPage', reducer });
  useInjectSaga({ key: 'userCourseDetailsPage', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const { courseDetails, gettingCourseDetails, errorGettingCourseDetails } =
    useSelector(mapStateToProps);

  // useEffect(() => {
  //   if (courseId === undefined || location?.state?.from !== '/enroll') {
  //     navigate('/enroll', { replace: true });
  //   } else {
  //     dispatch(actions.getCourseDetails(courseId));
  //   }
  // }, [courseId, location]);

  useEffect(() => {
    if (courseDetails === null) {
      dispatch(actions.getCourseDetails(courseId));
    }
  }, [courseDetails]);

  useEffect(() => () => dispatch(actions.cleanupStore()), []);

  return (
    <Sheet
      sx={{
        bgcolor: theme.palette.darkBlue,
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
    >
      <Box padding={{ xs: '2em', md: '3em' }} width={{ xs: '100%', md: '50%' }}>
        <Typography level="h1" sx={{ color: 'white' }}>
          {courseDetails?.title}
        </Typography>
        <Typography level="title-md" sx={{ color: 'white' }}>
          {courseDetails?.category}
        </Typography>
        <Stack spacing={1} direction="row" marginTop={2}>
          <Chip color="primary" variant="soft">
            {courseDetails?.totalSections} sections
          </Chip>
          <Chip color="success" variant="soft">
            {courseDetails?.totalSlides} slides
          </Chip>
          <Chip color="warning" variant="soft">
            {courseDetails?.totalDocuments} Documents
          </Chip>
        </Stack>
        <Box marginTop={2}>
          <Typography level="body-md" sx={{ color: 'white' }}>
            {courseDetails?.description}
          </Typography>
        </Box>
        <Box marginTop={2}>
          {courseDetails?.isEnrolled ? (
            <Chip variant="soft" color="primary" startDecorator={<InfoIcon />}>
              Vous êtes déjà inscrit
            </Chip>
          ) : (
            <Box
              onClick={() =>
                navigate(`/evaluate/${courseDetails?.id}`, {
                  state: { from: location.pathname },
                })
              }
            >
              <StyledActionButton text="Evaluation" />
            </Box>
          )}
        </Box>
      </Box>

      <Box width={{ xs: '100%', md: '50%' }}>
        <Box sx={{ padding: { xs: '2em', md: '3em' } }}>
          <AspectRatio
            maxHeight="300px"
            sx={{
              boxShadow: '0px 0px 40px 6px rgba(255,255,255,0.5)',
            }}
          >
            <img
              src={getCourseCover(courseDetails?.cover)}
              alt="Course couverture"
            />
          </AspectRatio>
        </Box>
      </Box>
    </Sheet>
  );
}

UserCourseDetailsPage.propTypes = {};

export default UserCourseDetailsPage;
