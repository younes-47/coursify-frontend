/**
 *
 * MultiChoiceQuestion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';

function MultiChoiceQuestion({ data, update }) {
  const dispatch = useDispatch();
  return (
    <Box marginBottom={2}>
      <Typography level="title-lg" textAlign="center">
        {data.question}
      </Typography>

      <FormControl>
        <RadioGroup
          aria-label="Réponse à la question"
          name="answers"
          onChange={(e) =>
            dispatch(update(data.questionId, parseInt(e.target.value, 10)))
          }
          defaultValue=""
        >
          <List
            sx={{
              '--List-gap': '0.1rem',
              '--ListItem-paddingY': '0.7rem',
              '--ListItem-radius': '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid container direction="row" width={{ xs: '100%', md: '70%' }}>
              {data.answers.map((answer) => (
                <Grid xs={12} md={6} key={answer.id}>
                  <ListItem
                    variant="outlined"
                    sx={{ boxShadow: 'sm', margin: '0.5em' }}
                  >
                    <Radio
                      overlay
                      value={answer.id}
                      label={answer.answer}
                      sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
                      slotProps={{
                        action: ({ checked }) => ({
                          sx: (theme) => ({
                            ...(checked && {
                              inset: -1,
                              border: '2px solid',
                              borderColor: theme.vars.palette.primary[500],
                            }),
                          }),
                        }),
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

MultiChoiceQuestion.propTypes = {
  data: PropTypes.object.isRequired,
  update: PropTypes.func,
};

export default MultiChoiceQuestion;
