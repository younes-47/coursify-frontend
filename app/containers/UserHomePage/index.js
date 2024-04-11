/**
 *
 * UserHomePage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import { StyledButton } from '../../components/Styled/StyledButton';

const mapStateToProps = createStructuredSelector({});

export function UserHomePage() {
  useInjectReducer({ key: 'userHomePage', reducer });
  useInjectSaga({ key: 'userHomePage', saga });

  const [number, setNumber] = useState(null);

  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnButtonClick = async () => {
    try {
      const response = await axios.get('/User/test');
      setNumber(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      navigate('/login', { state: { from: location }, replace: true });
    }
  };

  return (
    <>
      <h1>Hello there i am a user</h1>
      <button onClick={() => handleOnButtonClick()}>Show number</button>
      <h2>{number?.number}</h2>
    </>
  );
}

UserHomePage.propTypes = {};

export default UserHomePage;
