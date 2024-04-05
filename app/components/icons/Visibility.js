import { SvgIcon } from '@mui/joy';
import React from 'react';
import PropTypes from 'prop-types';

const Visibility = ({ Color = 'black' }) => (
  <SvgIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={Color}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
    >
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  </SvgIcon>
);

Visibility.propTypes = {
  Color: PropTypes.string,
};

export default Visibility;
