/**
 *
 * AdminDashboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Stack, Typography } from '@mui/joy';
import makeSelectAdminDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import InsightCard from '../../components/AdminSection/Dashboard/InsightCard';
import * as actions from './actions';
import * as selectors from './selectors';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';

const mapStateToProps = createStructuredSelector({
  gettingInsights: selectors.makeSelectGettingInsights(),
  gettingInsightsError: selectors.makeSelectGettingInsightsError(),
  insights: selectors.makeSelectInsights(),
});

export function AdminDashboard() {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });
  useAxiosPrivate();

  const dispatch = useDispatch();

  const { gettingInsights, insights, gettingInsightsError } =
    useSelector(mapStateToProps);

  useEffect(() => {
    if (gettingInsightsError === null) {
      dispatch(actions.getInsights());
    }
  }, [insights]);

  useEffect(
    () => () => {
      dispatch(actions.cleanupStore());
    },
    [],
  );
  return (
    <>
      <Typography level="h2" gutterBottom fontWeight={600}>
        Aperçu
      </Typography>
      <Stack
        spacing={5}
        direction="row"
        display={{ xs: 'none', md: 'flex', lg: 'flex' }}
      >
        <InsightCard data={insights?.totalCourses} title="Cours" />
        <InsightCard data={insights?.totalUsers} title="Utilisateurs" />
        <InsightCard data={insights?.totalAdmins} title="Administrateurs" />
      </Stack>
      <Stack
        spacing={5}
        direction="column"
        display={{ xs: 'flex', md: 'none', lg: 'none' }}
      >
        <InsightCard data={insights?.totalCourses} title="Cours" />
        <InsightCard data={insights?.totalUsers} title="Utilisateurs" />
        <InsightCard data={insights?.totalAdmins} title="Administrateurs" />
      </Stack>
    </>
  );
}

AdminDashboard.propTypes = {};

export default AdminDashboard;
