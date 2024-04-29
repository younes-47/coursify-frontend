/**
 *
 * AdminCoursesAdd
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import {
  AccordionGroup,
  Box,
  Button,
  IconButton,
  Stack,
  Tab,
  TabList,
  Tabs,
  Typography,
  tabClasses,
} from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import Section from '../../components/AdminSection/AddCourse/Section';
import Informations from '../../components/AdminSection/AddCourse/Information';
import NavigartionButtons from '../../components/AdminSection/AddCourse/NavigationButtons';
import { StyledButton } from '../../components/Styled/StyledButton';
import QuestionForm from '../../components/AdminSection/AddCourse/QuestionForm';

import * as selectors from './selectors';
import * as actions from './actions';
import Confirmation from '../../components/AdminSection/AddCourse/Confirmation';

const mapStateToProps = createStructuredSelector({
  courseInfo: selectors.makeSelectCourseInfo(),

  sections: selectors.makeSelectSections(),
  evaluationQuestions: selectors.makeSelectEvaluationQuestions(),
  quizQuestions: selectors.makeSelectQuizQuestions(),

  addingCourse: selectors.makeSelectAddingCourse(),
  addCourseError: selectors.makeSelectAddCourseError(),
  addCourseSuccess: selectors.makeSelectAddCourseSuccess(),

  gettingCourseCategories: selectors.makeSelectGettingCourseCategories(),
  courseCategories: selectors.makeSelectCourseCategories(),
  getCourseCategoriesError: selectors.makeSelectGetCourseCategoriesError(),
});

export function AdminCoursesAdd() {
  useInjectReducer({ key: 'adminCoursesAdd', reducer });
  useInjectSaga({ key: 'adminCoursesAdd', saga });

  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(0);
  const {
    sections,
    evaluationQuestions,
    courseInfo,
    quizQuestions,
    addingCourse,
    addCourseError,
    addCourseSuccess,
    gettingCourseCategories,
    courseCategories,
    getCourseCategoriesError,
  } = useSelector(mapStateToProps);

  const data = {
    courseInfo,
    sections,
    evaluationQuestions,
    quizQuestions,
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    if (courseCategories === null) {
      dispatch(actions.getCourseCategories());
    }
  }, [courseCategories]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography level="h2" gutterBottom fontWeight={600}>
            Ajouter une course
          </Typography>
        </Box>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          defaultValue={0}
          sx={{
            bgcolor: 'transparent',
          }}
        >
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              Informations
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Sections
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
              Evaluation
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={3}>
              Quiz
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={4}>
              Confirmation
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box>
        {/* Informations  */}
        {currentTab === 0 && (
          <>
            <Informations
              data={courseInfo}
              update={actions.updateCourseInfo}
              categories={courseCategories}
            />
            <NavigartionButtons
              setCurrentTab={setCurrentTab}
              CurrentTab={currentTab}
            />
          </>
        )}

        {/* Sections */}
        {currentTab === 1 && (
          <>
            <Stack spacing={2} sx={{ p: { xs: 2, md: 3 } }}>
              <IconButton
                color="success"
                variant="solid"
                sx={{ width: '110px', gap: 1 }}
                onClick={() => dispatch(actions.addSection())}
              >
                <AddCircleIcon />
                Ajouter
              </IconButton>
              <AccordionGroup size="lg">
                {sections.map((section) => (
                  <Section
                    data={section}
                    remove={actions.removeSection}
                    update={actions.updateSection}
                    key={section.id}
                  />
                ))}
              </AccordionGroup>
            </Stack>
            <NavigartionButtons
              setCurrentTab={setCurrentTab}
              CurrentTab={currentTab}
            />
          </>
        )}

        {/* Evaluation */}
        {currentTab === 2 && (
          <>
            <Stack spacing={2} sx={{ p: { xs: 2, md: 3 } }}>
              <IconButton
                color="success"
                variant="solid"
                sx={{ width: '110px', gap: 1 }}
                onClick={() => dispatch(actions.addEvaluationQuestion())}
              >
                <AddCircleIcon />
                Ajouter
              </IconButton>
              <AccordionGroup size="lg">
                {evaluationQuestions.map((evaluationQuestion) => (
                  <QuestionForm
                    data={evaluationQuestion}
                    remove={actions.removeEvaluationQuestion}
                    update={actions.updateEvaluationQuestion}
                    key={evaluationQuestion.id}
                  />
                ))}
              </AccordionGroup>
            </Stack>
            <NavigartionButtons
              setCurrentTab={setCurrentTab}
              CurrentTab={currentTab}
            />
          </>
        )}

        {/* Quiz */}

        {currentTab === 3 && (
          <>
            <Stack spacing={2} sx={{ p: { xs: 2, md: 3 } }}>
              <IconButton
                color="success"
                variant="solid"
                sx={{ width: '110px', gap: 1 }}
                onClick={() => dispatch(actions.addQuizQuestion())}
              >
                <AddCircleIcon />
                Ajouter
              </IconButton>
              <AccordionGroup size="lg">
                {quizQuestions.map((quizQuestion) => (
                  <QuestionForm
                    data={quizQuestion}
                    remove={actions.removeQuizQuestion}
                    update={actions.updateQuizQuestion}
                    key={quizQuestion.id}
                  />
                ))}
              </AccordionGroup>
            </Stack>
            <NavigartionButtons
              setCurrentTab={setCurrentTab}
              CurrentTab={currentTab}
            />
          </>
        )}

        {/* Confirmation */}
        {currentTab === 4 && (
          <>
            <Confirmation
              add={actions.addCourse}
              error={addCourseError}
              adding={addingCourse}
              data={data}
            />
            <NavigartionButtons
              setCurrentTab={setCurrentTab}
              CurrentTab={currentTab}
            />
          </>
        )}
      </Box>
    </>
  );
}

AdminCoursesAdd.propTypes = {};

export default AdminCoursesAdd;
