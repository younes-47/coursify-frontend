/**
 *
 * AdminCoursesAdd
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Option,
  Select,
  Sheet,
  Stack,
  Tab,
  TabList,
  Tabs,
  Textarea,
  Typography,
  tabClasses,
} from '@mui/joy';
import Dropzone from 'react-dropzone';
import makeSelectAdminCoursesAdd from './selectors';
import reducer from './reducer';
import saga from './saga';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';
import { StyledButton } from '../../components/Styled/StyledButton';
import MyDropZone from '../../components/MyDropZone';

export function AdminCoursesAdd() {
  useInjectReducer({ key: 'adminCoursesAdd', reducer });
  useInjectSaga({ key: 'adminCoursesAdd', saga });

  const [currentTab, setCurrentTab] = useState(1);
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
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
          </TabList>
        </Tabs>
      </Box>
      <Box>
        {currentTab === 0 && (
          <Stack spacing={4} sx={{ p: { xs: 2, md: 6 } }}>
            <FormControl>
              <FormLabel required>
                <Typography level="title-lg">Titre de course</Typography>
              </FormLabel>
              <Input type="text" placeholder="Titre de course..." />
            </FormControl>
            <FormControl required>
              <FormLabel>
                <Typography level="title-lg">Categorie de course</Typography>
              </FormLabel>
              <Select placeholder="Séléctionner..." variant="outlined">
                <Option>Technologie et informatique</Option>
                <Option>Language and Communication</Option>
                <Option>Arts et Cultures</Option>
                <Option>Principes de la cuisine</Option>
                <Option>Business et entrepreneuriat</Option>
                <Option>Science et mathématiques</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography level="title-lg">Description</Typography>
              </FormLabel>
              <Textarea placeholder="Description..." minRows={3} maxRows={8} />
            </FormControl>
            <CenteredContainer>
              <StyledButton color="darkBlue" onClick={() => setCurrentTab(1)}>
                Suivant
              </StyledButton>
            </CenteredContainer>
          </Stack>
        )}
        {currentTab === 1 && (
          <Stack spacing={4} sx={{ p: { xs: 2, md: 6 } }}>
            <FormControl required>
              <FormLabel>
                <Typography level="title-lg">Titre de la section</Typography>
              </FormLabel>
              <Input type="text" placeholder="Titre de la section..." />
            </FormControl>
            <FormControl required>
              <FormLabel>
                <Typography level="title-lg">Slides</Typography>
              </FormLabel>
              <MyDropZone />
            </FormControl>
            <FormControl>
              <FormLabel>
                <Typography level="title-lg">Documents</Typography>
              </FormLabel>
              <MyDropZone />
            </FormControl>
            <CenteredContainer>
              <Stack direction="row" spacing={2}>
                <StyledButton color="darkBlue" onClick={() => setCurrentTab(0)}>
                  Précedent
                </StyledButton>
                <StyledButton color="darkBlue" onClick={() => setCurrentTab(2)}>
                  Suivant
                </StyledButton>
              </Stack>
            </CenteredContainer>
          </Stack>
        )}
      </Box>
    </>
  );
}

AdminCoursesAdd.propTypes = {};

const mapStateToProps = createStructuredSelector({});

export default AdminCoursesAdd;
