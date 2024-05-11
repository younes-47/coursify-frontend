/**
 *
 * FrontSection
 *
 */

import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Carousel } from 'primereact/carousel';
import { useTheme } from 'styled-components';
import QuoteIcon from '../icons/QuoteIcon';
import mehdiAvatar from '../../images/reviewers/mehdi.jpg';
import mohammedAvatar from '../../images/reviewers/mohammed.jpg';
import manalAvatar from '../../images/reviewers/manal.jpg';

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
      name: 'Manal Jellouli',
      role: 'Etudiante',
      avatar: manalAvatar,
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
        <Box
          sx={{
            gap: { xs: '1em', sm: '2em', md: '5em' },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src={review.avatar} sx={{ '--Avatar-size': '5em' }} />
            <Typography fontSize="xl" fontWeight="lg" textAlign="center">
              {review.name}
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textAlign="center">
              {review.role}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '50%' },
              textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
            }}
          >
            <Typography level="h4" fontWeight="lg">
              <QuoteIcon Color={theme.palette.lightBrown} />
            </Typography>
            <Typography level="h4" fontWeight="lg">
              {review.review}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.lightYellow,
        padding: { xs: '1em', sm: '2em', md: '2em 15%', lg: '2em 25%' },
      }}
    >
      <Typography
        level="h3"
        textAlign="center"
        marginBottom="1em"
        fontWeight={400}
      >
        Ce que nos étudiants disent de nous
      </Typography>
      <Carousel
        value={reviews}
        numVisible={1}
        numScroll={1}
        itemTemplate={reviewTemplate}
        autoplayInterval={3500}
      />
    </Box>
  );
}

ReviewSection.propTypes = {};

export default ReviewSection;
