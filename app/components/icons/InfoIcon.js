/**
 *
 * InfoIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SvgIcon } from '@mui/joy';

const InfoIcon = ({ Color = 'black' }) => <SvgIcon></SvgIcon>;
InfoIcon.propTypes = {
  Color: PropTypes.string,
};

export default InfoIcon;