/**
 *
 * FrontSection
 *
 */

import React from 'react';
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Sheet,
  Typography,
} from '@mui/joy';
import { Carousel } from 'primereact/carousel';
import { useTheme } from 'styled-components';
import { StyledContainer } from '../Styled/StyledContainer';
import creativeIllustration from '../../images/creative-illustration.svg';
import { CenteredContainer } from '../Styled/CenteredContainer';
import QuoteIcon from '../icons/QuoteIcon';
import mehdiAvatar from '../../images/reviewers/mehdi.jpg';
import marieAvatar from '../../images/reviewers/marie.jpg';
import mohammedAvatar from '../../images/reviewers/mohammed.jpg';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ReviewSection() {
  const theme = useTheme();
  const reviews = [
    {
      name: 'Mehdi Ben Youssef',
      role: 'Freelancer',
      avatar: mehdiAvatar,
      review:
        "Les cours ici sont très bien faits. J'aime bien comment ils sont organisés, c'est facile à suivre. C'est vraiment super pour apprendre, je vous le recommande.",
    },
    {
      name: 'Marie Dubois',
      role: 'Etudiante',
      avatar: marieAvatar,
      review:
        "J'ai appris beaucoup de choses sur ce site. Les cours sont très bien expliqués et j'ai pu les suivre sans problème. Je recommande ce site à tous ceux qui veulent apprendre.",
    },
    {
      name: 'Mohammed Mbarki',
      role: 'Professeur',
      avatar: mohammedAvatar,
      review:
        "J'aime beaucoup comment c'est facile à se retrouver sur ce site. Et les cours sont vraiment utiles pour mon travail. merci beaucoup !",
    },
  ];
  const reviewTemplate = (review) => (
    <Card
      orientation="horizontal"
      sx={{
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      <CardContent>
        <CenteredContainer style={{ gap: '5em' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src={review.avatar} sx={{ '--Avatar-size': '5em' }} />
            <Typography fontSize="xl" fontWeight="lg" textAlign="center">
              {review.name}
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textAlign="center">
              {review.role}
            </Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography level="h4" fontWeight="lg">
              <QuoteIcon Color={theme.palette.lightBrown} />
            </Typography>
            <Typography level="h4" fontWeight="lg">
              {review.review}
            </Typography>
          </Box>
        </CenteredContainer>
      </CardContent>
    </Card>
  );
  return (
    <div
      style={{
        padding: '1em 25%',
        backgroundColor: theme.palette.lightGray,
      }}
    >
      <Typography level="h3" textAlign="center" sx={{ marginBottom: '1em' }}>
        Ce que nos étudiants disent de nous
      </Typography>
      <Carousel
        value={reviews}
        numVisible={1}
        numScroll={1}
        itemTemplate={reviewTemplate}
        autoplayInterval={3500}
      />
    </div>
  );
}

ReviewSection.propTypes = {};

export default ReviewSection;
