/**
 *
 * MultiChoiceQuestion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import Grid from '@mui/joy/Grid';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import { useDispatch } from 'react-redux';

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
