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

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ReviewSection() {
  const theme = useTheme();
  const reviews = [
    {
      name: 'Mehdi Ben Youssef',
      role: 'Freelancer',
      avatar:
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        "Les cours ici sont très bien faits. J'aime bien comment ils sont organisés, c'est facile à suivre. C'est vraiment super pour apprendre, je vous le recommande.",
    },
    {
      name: 'Marie Dubois',
      role: 'Etudiante',
      avatar:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      review:
        "J'ai appris beaucoup de choses sur ce site. Les cours sont très bien expliqués et j'ai pu les suivre sans problème. Je recommande ce site à tous ceux qui veulent apprendre.",
    },
    {
      name: 'Mohammed Mbarki',
      role: 'Professeur',
      avatar:
        'https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        "J'aime beaucoup comment c'est facile à se retrouver sur ce site. Et les cours sont vraiment utiles pour mon travail. merci beaucoup !",
    },
  ];
  const reviewTemplate = review => (
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
              <QuoteIcon Color={theme.colors.lightBrown} />
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
        backgroundColor: theme.colors.lightYellow,
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
