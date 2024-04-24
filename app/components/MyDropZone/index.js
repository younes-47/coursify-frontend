/**
 *
 * MyDropZone
 *
 */

import { List, ListItem, Sheet, Typography } from '@mui/joy';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MyDropZone({ accept = '' }) {
  const [files, setFiles] = useState([]);

  const selectedFiles = files.map((file) => (
    <ListItem key={file.path}>
      <Typography level="body-xs">
        {file.path} - {(file.size / 1048576).toFixed(2)} MB
      </Typography>
    </ListItem>
  ));
  return (
    <Dropzone onDrop={(acceptedFiles) => setFiles(acceptedFiles)} maxFiles={10}>
      {({ getRootProps, getInputProps }) => (
        <Sheet
          sx={{
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
          }}
          variant="soft"
        >
          <Sheet
            sx={{
              mb: 2, // margin bottom
              display: 'flex',
              flexDirection: 'column',
              border: '2px dashed',
            }}
            variant="outlined"
            color="primary"
          >
            <div {...getRootProps()} style={{ padding: '1.5em 1em' }}>
              <input {...getInputProps()} />
              <Typography variant="body-md" textAlign="center">
                Faites glisser et déposez des fichiers ici, ou cliquez pour
                sélectionner des fichiers
              </Typography>
              {accept && (
                <Typography variant="body-md" textAlign="center">
                  (Seuls les fichiers de type {accept} sont acceptés)
                </Typography>
              )}
            </div>
          </Sheet>

          {selectedFiles.length ? (
            <>
              <Typography level="body-md" fontWeight="lg">
                Fichiers sélectionnés :
              </Typography>
              <List>{selectedFiles}</List>
            </>
          ) : (
            <Typography level="body-xs">Aucun fichier sélectionné</Typography>
          )}
        </Sheet>
      )}
    </Dropzone>
  );
}

MyDropZone.propTypes = {
  accept: PropTypes.string,
};

export default MyDropZone;
