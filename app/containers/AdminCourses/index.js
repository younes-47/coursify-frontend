/**
 *
 * AdminCourses
 *
 */

import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Box,
  Divider,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Table,
  Typography,
} from '@mui/joy';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import reducer from './reducer';
import saga from './saga';

import * as selectors from './selectors';
import * as actions from './actions';
import DropdownMenu from '../../components/AdminSection/CoursesTable/DopdownMenu';
import NoResultIcon from '../../components/icons/NoResult';
import NoResultFound from '../../components/NoResultFound';
import LoadingIndicator from '../../components/LoadingIndicator';
import MySnackbar from '../../components/MySnackbar';
import MyModal from '../../components/MyModal';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

const mapStateToProps = createStructuredSelector({
  gettingCourses: selectors.makeSelectGettingCourses(),
  courses: selectors.makeSelectCourses(),
  gettingCoursesError: selectors.makeSelectGettingCoursesError(),
  deletingCourse: selectors.makeSelectDeletingCourse(),
  deletingCourseError: selectors.makeSelectDeletingCourseError(),
  deletingCourseSuccess: selectors.makeSelectDeletingCourseSuccess(),
});

export function AdminCourses() {
  useInjectReducer({ key: 'adminCourses', reducer });
  useInjectSaga({ key: 'adminCourses', saga });
  useAxiosPrivate();

  const {
    gettingCourses,
    courses,
    gettingCoursesError,
    deletingCourse,
    deletingCourseError,
    deletingCourseSuccess,
  } = useSelector(mapStateToProps);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('neutral');

  const [showModal, setShowModal] = useState(false);

  const [courseIdToDelete, setCourseIdToDelete] = useState(null);

  useEffect(() => {
    if (courses === null) {
      dispatch(actions.getCourses());
    }
  }, [courses]);

  useEffect(() => {
    if (
      location.state?.from === '/admin/courses/add' &&
      location.state?.success
    ) {
      setSnackbarMessage('Course a été ajouté avec succès');
      setSnackbarColor('success');
      setShowSnackbar(true);
    }
  }, [location]);

  useEffect(() => {
    if (deletingCourseSuccess !== null) {
      dispatch(actions.getCourses());

      setSnackbarMessage('Course a été supprimé avec succès');
      setSnackbarColor('danger');
      setShowSnackbar(true);
    }
  }, [deletingCourseSuccess]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );

  return (
    <>
      <Typography level="h2" gutterBottom fontWeight={600}>
        Cours
      </Typography>

      <IconButton
        color="success"
        variant="solid"
        sx={{ width: '110px', gap: 1 }}
        onClick={() =>
          navigate('/admin/courses/add', { state: { from: location.pathname } })
        }
      >
        <AddCircleIcon />
        Ajouter
      </IconButton>
      {/* eslint-disable-next-line no-nested-ternary */}
      {gettingCourses || deletingCourse ? (
        <LoadingIndicator />
      ) : courses?.length > 0 ? (
        <Sheet
          variant="outlined"
          sx={{
            display: { xs: 'initial', sm: 'initial' },
            width: '100%',
            borderRadius: 'sm',
            flexShrink: 1,
            overflow: 'auto',
            minHeight: 0,
          }}
        >
          <Table
            stickyHeader
            stickyFooter
            hoverRow
            sx={{
              '--TableCell-headBackground':
                'var(--joy-palette-background-level1)',
              '--Table-headerUnderlineThickness': '1px',
              '--TableRow-hoverBackground':
                'var(--joy-palette-background-level1)',
              '--TableCell-paddingY': '4px',
              '--TableCell-paddingX': '8px',
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Catégorie</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.category}</td>
                  <td>
                    <DropdownMenu
                      onDelete={() => {
                        setCourseIdToDelete(row.id);
                        setShowModal(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      ) : (
        <NoResultFound message="Aucune course trouvée" color="darkGray" />
      )}
      <MySnackbar
        open={showSnackbar}
        setOpen={setShowSnackbar}
        message={snackbarMessage}
        color={snackbarColor}
      />
      <MyModal
        open={showModal}
        setOpen={setShowModal}
        onConfirm={() => {
          dispatch(actions.deleteCourse(courseIdToDelete));
          setCourseIdToDelete(null);
          setShowModal(false);
        }}
        color="danger"
        message="Êtes-vous sûr de vouloir supprimer ce cours ? Cela supprimera toutes les informations relatives à ce cous, y compris les inscriptions des utilisateurs."
      />
    </>
  );
}

AdminCourses.propTypes = {};

export default AdminCourses;
