/**
 *
 * UserCourseContent
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Carousel } from 'primereact/carousel';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import * as actions from './actions';
import * as selectors from './selectors';
import NavigationButtons from '../../components/AdminSection/AddCourse/NavigationButtons';
import LoadingIndicator from '../../components/LoadingIndicator';
import MySnackbar from '../../components/MySnackbar';
const mapStateToProps = createStructuredSelector({
  courseContent: selectors.makeSelectCourseContent(),
  gettingCourseContent: selectors.makeSelectGettingCourseContent(),
  gettingCourseContentError: selectors.makeSelectGettingCourseContentError(),

  markingAsCompleted: selectors.makeSelectMarkingAsCompleted(),
  markingAsCompletedError: selectors.makeSelectMarkingAsCompletedError(),

  markingAsIncomplete: selectors.makeSelectMarkingAsIncomplete(),
  markingAsIncompleteError: selectors.makeSelectMarkingAsIncompleteError(),
});

const slideTemplate = (slide) => (
  <AspectRatio sx={{ width: '100%' }}>
    <img src={`data:image/png;base64,${slide}`} alt="slide" />
  </AspectRatio>
);

export function UserCourseContent() {
  useInjectReducer({ key: 'userCourseContent', reducer });
  useInjectSaga({ key: 'userCourseContent', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();
  const { courseId } = useParams();

  const {
    courseContent,
    gettingCourseContent,
    gettingCourseContentError,
    markingAsCompleted,
    markingAsCompletedError,
    markingAsIncomplete,
    markingAsIncompleteError,
  } = useSelector(mapStateToProps);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('neutral');

  const [sectionIndex, setSectionIndex] = useState(0);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    if (courseContent === null) dispatch(actions.getCourseContent(courseId));
  }, [courseContent]);

  // Download Document
  const handleDocDownload = (doc) => {
    const binaryString = atob(doc);

    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i += 1) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes.buffer], {
      type: 'application/pdf',
    });

    const blobUrl = window.URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
    setLoadingButton(false);
  };

  // SHOW SNACKBAR
  useEffect(() => {
    if (markingAsCompletedError === false) {
      dispatch(actions.getCourseContent(courseId));
      setSnackbarMessage('Section marquée comme complétée');
      setSnackbarColor('success');
      setShowSnackbar(true);
    }
    if (markingAsCompletedError === true) {
      setSnackbarMessage("Une erreur s'est produite");
      setSnackbarColor('danger');
      setShowSnackbar(true);
    }
  }, [markingAsCompletedError]);

  useEffect(() => {
    if (markingAsIncompleteError === false) {
      dispatch(actions.getCourseContent(courseId));
      setSnackbarMessage('Section marquée comme incomplète');
      setSnackbarColor('success');
      setShowSnackbar(true);
    }
    if (markingAsIncompleteError === true) {
      setSnackbarMessage("Une erreur s'est produite");
      setSnackbarColor('danger');
      setShowSnackbar(true);
    }
  }, [markingAsIncompleteError]);

  useEffect(() => () => dispatch(actions.cleanupStore()), []);

  return (
    <>
      {gettingCourseContent ? (
        <LoadingIndicator />
      ) : (
        <>
          <Typography level="h4">
            Section #{sectionIndex + 1} :{' '}
            {courseContent?.sections[sectionIndex]?.title}
          </Typography>
          {courseContent?.sections[sectionIndex]?.isCompleted === false ? (
            <Button
              color="success"
              variant="outlined"
              startDecorator={<RadioButtonUncheckedIcon />}
              sx={{ marginTop: 2 }}
              disabled={markingAsCompleted === true}
              onClick={() => {
                dispatch(
                  actions.markCompleteAction(
                    courseContent?.sections[sectionIndex]?.id,
                  ),
                );
              }}
            >
              Marquer complétée
            </Button>
          ) : (
            <Button
              color="success"
              variant="solid"
              startDecorator={<TaskAltIcon />}
              sx={{ marginTop: 2 }}
              disabled={markingAsIncomplete === true}
              onClick={() => {
                dispatch(
                  actions.markIncompleteAction(
                    courseContent?.sections[sectionIndex]?.id,
                  ),
                );
              }}
            >
              Complétée
            </Button>
          )}
          <Box display={{ sm: 'block', md: 'block', lg: 'flex' }} marginTop={5}>
            <Box width={{ sm: 1, md: 1, lg: 0.75 }} p={{ sm: 0, md: 0, lg: 5 }}>
              <Stack spacing={4} direction="column">
                <Carousel
                  key={sectionIndex}
                  value={courseContent?.sections[sectionIndex]?.slides}
                  numVisible={1}
                  numScroll={1}
                  itemTemplate={slideTemplate}
                />
                <NavigationButtons
                  setCurrent={setSectionIndex}
                  current={sectionIndex}
                  lastIndex={courseContent?.sections.length - 1}
                />
              </Stack>
            </Box>

            <Divider
              orientation="vertical"
              sx={{ mx: 5, display: { sm: 'none', md: 'none', lg: 'block' } }}
            />

            <Divider
              orientation="horizontal"
              sx={{ m: 5, display: { sm: 'block', md: 'block', lg: 'none' } }}
            />

            <Box>
              <Typography level="h4" marginBottom={3}>
                Support de documents
              </Typography>
              <Stack spacing={2} direction="column">
                {courseContent?.sections[sectionIndex]?.documents.map(
                  (doc, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      color="warning"
                      startDecorator={<PictureAsPdfIcon />}
                      disabled={loadingButton}
                      onClick={() => {
                        setLoadingButton(true);
                        handleDocDownload(doc);
                      }}
                    >
                      Document #{index + 1}
                    </Button>
                  ),
                )}
              </Stack>
            </Box>
          </Box>
        </>
      )}
      <MySnackbar
        open={showSnackbar}
        setOpen={setShowSnackbar}
        message={snackbarMessage}
        color={snackbarColor}
      />
    </>
  );
}

UserCourseContent.propTypes = {};

export default UserCourseContent;
