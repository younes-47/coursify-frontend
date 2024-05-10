/**
 *
 * InfoIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/joy/SvgIcon';

const InfoIcon = ({ Color = 'black' }) => <SvgIcon></SvgIcon>;
InfoIcon.propTypes = {
  Color: PropTypes.string,
};

export default InfoIcon;
