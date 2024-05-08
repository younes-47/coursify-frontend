import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useTheme } from 'styled-components';
import { Grid } from '@mui/joy';
import technologyImage from '../../images/categories/technology.jpg';
import languagesImage from '../../images/categories/languages.jpg';
import artsImage from '../../images/categories/arts.jpg';
import cookingImage from '../../images/categories/cooking.jpg';
import businessImage from '../../images/categories/business.jpg';
import scienceImage from '../../images/categories/science.jpg';

export default function SubjectSection() {
  const theme = useTheme();
  const subjects = [
    {
      title: 'Technologie et informatique',
      cover: technologyImage,
    },
    {
      title: 'Langues et Communication',
      cover: languagesImage,
    },
    {
      title: 'Arts et Cultures',
      cover: artsImage,
    },
    {
      title: 'Principes de la cuisine',
      cover: cookingImage,
    },
    {
      title: 'Business et entrepreneuriat',
      cover: businessImage,
    },
    {
      title: 'Science et mathématiques',
      cover: scienceImage,
    },
  ];
  return (
    <Box
      sx={{
        px: { xs: 3, sm: 3, md: '10%' },
        marginTop: '3em',
      }}
    >
      <Typography level="h3" textAlign="left" sx={{ marginBottom: '1em' }}>
        Explorer les sujets et les compétences
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {subjects.map((subject) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
            key={subject?.title}
          >
            <Card
              sx={{
                aspectRatio: '1/1',
                transition: '0.3s',
                borderWidth: '0px',
                width: '100%',
                margin: '1em',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: ` 3px 2px 26px 5px ${theme.palette.lightPurple}`,
                  borderWidth: '0px',
                },
              }}
            >
              <CardCover>
                <img src={subject.cover} loading="lazy" alt={subject.title} />
              </CardCover>
              <CardContent>
                <Typography
                  level="body-lg"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 35, sm: 35 }}
                >
                  {subject.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
