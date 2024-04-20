import { AspectRatio } from '@mui/joy';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AVATAR0 from '../../images/avatars/AVATAR0.png';
import AVATAR1 from '../../images/avatars/AVATAR1.png';
import AVATAR2 from '../../images/avatars/AVATAR2.png';
import AVATAR3 from '../../images/avatars/AVATAR3.png';
import AVATAR4 from '../../images/avatars/AVATAR4.png';
import AVATAR5 from '../../images/avatars/AVATAR5.png';
import AVATAR6 from '../../images/avatars/AVATAR6.png';
import AVATAR7 from '../../images/avatars/AVATAR7.png';
import AVATAR8 from '../../images/avatars/AVATAR8.png';
import AVATAR9 from '../../images/avatars/AVATAR9.png';
import AVATAR10 from '../../images/avatars/AVATAR10.png';
import AVATAR11 from '../../images/avatars/AVATAR11.png';
import AVATAR12 from '../../images/avatars/AVATAR12.png';
import AVATAR13 from '../../images/avatars/AVATAR13.png';
import AVATAR14 from '../../images/avatars/AVATAR14.png';
import AVATAR15 from '../../images/avatars/AVATAR15.png';
import { changeAvatarAction } from './actions';

// import other avatars as needed

export const avatarsPaths = {
  AVATAR0,
  AVATAR1,
  AVATAR2,
  AVATAR3,
  AVATAR4,
  AVATAR5,
  AVATAR6,
  AVATAR7,
  AVATAR8,
  AVATAR9,
  AVATAR10,
  AVATAR11,
  AVATAR12,
  AVATAR13,
  AVATAR14,
  AVATAR15,
};

const Avatars = ({ setModalVisible }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
      }}
    >
      {Object.entries(avatarsPaths).map(([key, value]) => (
        <AspectRatio
          ratio="1"
          maxHeight={200}
          sx={{
            flex: 1,
            minWidth: 120,
            borderRadius: '50%',
          }}
          key={key}
        >
          <button
            onClick={() => {
              setModalVisible(false);
              dispatch(changeAvatarAction(key));
            }}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            type="button"
          >
            <img
              src={value}
              loading="lazy"
              alt="avatar"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />{' '}
          </button>
          ;
        </AspectRatio>
      ))}
    </div>
  );
};

Avatars.propTypes = {
  setModalVisible: PropTypes.func.isRequired,
};

export default Avatars;
