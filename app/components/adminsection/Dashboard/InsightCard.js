import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/joy';
import { useTheme } from 'styled-components';
const InsightCard = ({ data, title }) => {
  const theme = useTheme();
  return (
    <Card
      size="lg"
      sx={{
        width: '100%',
        backgroundImage:
          'linear-gradient(to right top, #f5dece, #f8d4cc, #f8ccd0, #f0c5d8, #e0c1e3)',
      }}
      variant="plain"
      color="primary"
    >
      <CardContent orientation="horizontal">
        <CardContent>
          <Typography level="title-md">{title}</Typography>
          <Typography level="h2">{data}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

InsightCard.propTypes = {
  data: PropTypes.any,
  title: PropTypes.string,
};

export default InsightCard;
