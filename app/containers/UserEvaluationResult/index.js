/**
 *
 * UserEvaluationResult
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardOverflow,
  IconButton,
  Sheet,
  Typography,
} from '@mui/joy';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import makeSelectUserEvaluationResult from './selectors';
import reducer from './reducer';
import saga from './saga';
import useAxiosPrivate from '../../utils/custom/hooks/useAxiosPrivate';
import { CenteredContainer } from '../../components/Styled/CenteredContainer';
import { StyledButton } from '../../components/Styled/StyledButton';
import { StyledLink } from '../../components/Styled/StyledLink';

const mapStateToProps = createStructuredSelector({});

export function UserEvaluationResult() {
  useInjectReducer({ key: 'userEvaluationResult', reducer });
  useInjectSaga({ key: 'userEvaluationResult', saga });
  useAxiosPrivate();

  const location = useLocation();
  const navigate = useNavigate();

  const result = location?.state?.result;

  console.log(location);

  useEffect(() => {
    if (location?.state?.from !== '/evaluate') {
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
          color={result.isPassed ? 'success' : 'danger'}
          sx={{
            flex: '0 0 150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography fontSize="xl4" fontWeight="xl" textColor="#fff">
            {result.score}%
          </Typography>
          <Typography textColor="#fff">votre score</Typography>
        </CardOverflow>
        <CardContent sx={{ gap: 1.5 }}>
          <CenteredContainer>
            {result.isPassed ? (
              <MoodIcon color="success" sx={{ fontSize: 'xl4' }} />
            ) : (
              <SentimentVeryDissatisfiedIcon
                color="danger"
                sx={{ fontSize: 'xl4' }}
              />
            )}
          </CenteredContainer>

          <Typography level="title-lg">
            {result.isPassed
              ? "Félicitations! Vous avez réussi l'évaluation"
              : "Vous n'avez pas réussi l'évaluation"}
          </Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5 }}>
            {result.isPassed
              ? 'Vous pouvez maintenant accéder au contenu de course via l\'onglet "Mes courses"'
              : ''}
          </Typography>
          <CenteredContainer>
            <StyledLink
              color="darkBlue"
              onClick={() => navigate('/enroll', { replace: true })}
            >
              Retourner
            </StyledLink>
          </CenteredContainer>
        </CardContent>
      </Card>
    </CenteredContainer>
  );
}

UserEvaluationResult.propTypes = {};

export default UserEvaluationResult;