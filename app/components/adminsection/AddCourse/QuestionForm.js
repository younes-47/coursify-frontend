import * as React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';

export default function QuestionForm({ data, update, remove }) {
  const dispatch = useDispatch();
  const correctAnswerMarked = data.answers.some((answer) => answer.isCorrect);

  const handleAnswerChange = (id, value) => {
    const updatedAnswers = data.answers.map((answer) =>
      answer.id === id ? { ...answer, answer: value } : answer,
    );
    dispatch(update(data.id, 'answers', updatedAnswers));
  };

  const markAnswerAsCorrect = (id) => {
    const updatedAnswers = data.answers.map((answer) =>
      answer.id === id ? { ...answer, isCorrect: !answer.isCorrect } : answer,
    );
    dispatch(update(data.id, 'answers', updatedAnswers));
  };

  return (
    <Grid container alignItems="center">
      <Grid xs>
        <Accordion key={data.id} defaultExpanded={data.id === 0}>
          <AccordionSummary>{data.question || 'Question'}</AccordionSummary>
          <AccordionDetails>
            <Stack spacing={4} sx={{ p: { xs: 2, md: 2 } }}>
              <FormControl required>
                <FormLabel>
                  <Typography level="title-lg">La question</Typography>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Entre la question..."
                  value={data.question}
                  onChange={(e) =>
                    dispatch(update(data.id, 'question', e.target.value))
                  }
                />
              </FormControl>
              <Grid container spacing={3}>
                {data.answers.map((answer) => (
                  <Grid xs={12} sm={12} md={6} key={answer.id}>
                    <Stack direction="column" spacing={1} key={answer.id}>
                      <FormControl required>
                        <FormLabel>Réponse #{answer.id}</FormLabel>
                        <Input
                          type="text"
                          placeholder="Réponse..."
                          value={answer.answer}
                          onChange={(e) =>
                            handleAnswerChange(answer.id, e.target.value)
                          }
                        />
                      </FormControl>
                      <FormControl required>
                        <Checkbox
                          disabled={correctAnswerMarked && !answer.isCorrect}
                          size="sm"
                          checked={answer.isCorrect}
                          onChange={() => markAnswerAsCorrect(answer.id)}
                          label="Réponse correcte"
                        />
                      </FormControl>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid>
        <IconButton
          color="danger"
          disabled={data.id === 0}
          onClick={() => dispatch(remove(data.id))}
        >
          <HighlightOffIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

QuestionForm.propTypes = {
  data: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func,
};
