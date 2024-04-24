/**
 *
 * AdminCourses
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Button, IconButton, Sheet, Table, Typography } from '@mui/joy';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { StyledButton } from 'components/Styled/StyledButton';
import { useLocation, useNavigate } from 'react-router-dom';
import makeSelectAdminCourses from './selectors';
import reducer from './reducer';
import saga from './saga';
AdminCourses.propTypes = {};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('1', 159, 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
  createData('6', 159, 6.0, 24, 4.0),
  createData('7', 237, 9.0, 37, 4.3),
  createData('8', 262, 16.0, 24, 6.0),
  createData('9', 305, 3.7, 67, 4.3),
  createData('10', 356, 16.0, 49, 3.9),
];

export function AdminCourses() {
  useInjectReducer({ key: 'adminCourses', reducer });
  useInjectSaga({ key: 'adminCourses', saga });

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Typography level="h2" gutterBottom fontWeight={600}>
        Courses
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
              <th>colonne 1</th>
              <th>colonne 2</th>
              <th>colonne 3</th>
              <th>colonne 4</th>
              <th>colonne 5</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
                <td>{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}

const mapStateToProps = createStructuredSelector({});

export default AdminCourses;
