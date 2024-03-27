import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useTheme } from 'styled-components';
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
      title: 'Language and Communication',
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
    <div
      style={{
        padding: '1em 10%',
        marginTop: '2em',
      }}
    >
      <Typography level="h3" textAlign="left" sx={{ marginBottom: '1em' }}>
        Explorer les sujets et les compétences
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '3em',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {subjects.map((subject) => (
          <div
            key={subject.title}
            style={{
              width: 'calc(33% - (2 * 1em))',
              flexGrow: 0,
            }}
          >
            <Card
              sx={{
                aspectRatio: '1/1',
                transition: '0.3s',
                borderWidth: '0px',
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
                  mt={{ xs: 6, sm: 35 }}
                >
                  {subject.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Box>
    </div>
  );
}
