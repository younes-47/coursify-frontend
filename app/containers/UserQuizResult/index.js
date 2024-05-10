/**
 *
 * UserQuizResult
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';
import { StyledLink } from '../../components/Styled/StyledLink';

const mapStateToProps = createStructuredSelector({});

export function UserQuizResult() {
  useInjectReducer({ key: 'userQuizResult', reducer });
  useInjectSaga({ key: 'userQuizResult', saga });
  useAxiosPrivate();

  const location = useLocation();
  const navigate = useNavigate();

  const result = location?.state?.result;

  useEffect(() => {
    if (location?.state?.from !== '/Quiz') {
      navigate('/enroll', { replace: true });
    }
  }, [location]);

  return (
    <CenteredContainer>
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: 'center',
          maxWidth: '100%',
          width: { xs: '100%', sm: '100%', md: '100%', lg: '50%' },
        }}
      >
        <CardOverflow
          variant="solid"
          color="success"
          sx={{
            flex: '0 0 150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
            {result}%
          </Typography>
          <Typography textColor="#fff">votre score</Typography>
        </CardOverflow>
        <CardContent sx={{ gap: 1.5 }}>
          <CenteredContainer>
            <CheckCircleIcon color="success" sx={{ fontSize: 'xl4' }} />
          </CenteredContainer>

          <Typography level="title-lg">
            Vous avez passé le quiz avec succès!
          </Typography>
          {/* <Typography fontSize="sm" sx={{ mt: 0.5 }}>
            Voici votre score
          </Typography> */}
          <CenteredContainer>
            <StyledLink
              color="darkBlue"
              onClick={() => navigate('/mycourses', { replace: true })}
            >
              Retourner
            </StyledLink>
          </CenteredContainer>
        </CardContent>
      </Card>
    </CenteredContainer>
  );
}

UserQuizResult.propTypes = {};

export default UserQuizResult;
