import React from 'react';

import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import MyDropZone from '../../MyDropZone';

const Section = ({ data, update, remove }) => {
  const dispatch = useDispatch();

  return (
    <Grid container alignItems="center" key={data.id}>
      <Grid xs>
        <Accordion key={data.id}>
          <AccordionSummary>{data.title || 'Section'}</AccordionSummary>
          <AccordionDetails>
            <Stack spacing={4} sx={{ p: { xs: 2, md: 4 } }}>
              <FormControl required>
                <FormLabel>
                  <Typography level="title-lg">Titre de la section</Typography>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Titre de la section..."
                  value={data.title}
                  onChange={(e) =>
                    dispatch(update(data.id, 'title', e.target.value))
                  }
                />
              </FormControl>
              <FormControl required>
                <FormLabel>
                  <Typography level="title-lg">Slides</Typography>
                </FormLabel>
                <MyDropZone
                  color="primary"
                  type="slides"
                  update={update}
                  files={data.slides}
                  id={data.id}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Typography level="title-lg">Documents</Typography>
                </FormLabel>
                <MyDropZone
                  color="warning"
                  type="documents"
                  update={update}
                  files={data.documents}
                  id={data.id}
                />
              </FormControl>
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
};

Section.propTypes = {
  data: PropTypes.object,
  update: PropTypes.func,
  remove: PropTypes.func,
};

export default Section;
