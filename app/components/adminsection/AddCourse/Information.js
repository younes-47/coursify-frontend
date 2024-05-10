import React from 'react';

import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy';
import { useDispatch } from 'react-redux';
import FileDropzone from '../../FileDropzone';

const Informations = ({ data, update, categories }) => {
  const dispatch = useDispatch();

  return (
    <Stack spacing={4} sx={{ p: { xs: 2, md: 6 } }}>
      <FormControl>
        <FormLabel required>
          <Typography level="title-lg">Titre du cours</Typography>
        </FormLabel>
        <Input
          type="text"
          placeholder="Titre de course..."
          value={data.courseTitle}
          onChange={(e) => dispatch(update('courseTitle', e.target.value))}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>
          <Typography level="title-lg">Categorie du cours</Typography>
        </FormLabel>
        <Select
          placeholder="Séléctionner..."
          defaultValue={null}
          value={data.courseCategoryId}
          variant="outlined"
          onChange={(e) => {
            const CATEGORY = categories?.find(
              (category) => category.title === e?.target.innerHTML,
            );
            dispatch(update('courseCategoryId', CATEGORY?.id));
          }}
        >
          {categories?.map((category) => (
            <Option value={category.id} key={category.id}>
              {category.title}
            </Option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>
          <Typography level="title-lg">Description</Typography>
        </FormLabel>
        <Textarea
          placeholder="Description..."
          minRows={3}
          maxRows={8}
          value={data.courseDescription}
          onChange={(e) =>
            dispatch(update('courseDescription', e?.target?.value))
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>
          <Typography level="title-lg">Couverture</Typography>
        </FormLabel>
        <FileDropzone
          update={update}
          files={data.courseCover}
          field="courseCover"
        />
      </FormControl>
    </Stack>
  );
};

Informations.propTypes = {
  data: PropTypes.object,
  update: PropTypes.func,
  categories: PropTypes.array,
};

export default Informations;
