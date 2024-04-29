/**
 *
 * MyDropZone
 *
 */

import { List, ListItem, Sheet, Typography } from '@mui/joy';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';

function MyDropZone({ color = 'neutral', type, update, id }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFile = async (acceptedFiles) => {
    setLoading(true);

    const promises = acceptedFiles.map(
      (acceptedFile) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            resolve(event.target.result);
          };

          reader.onerror = (err) => {
            reject(err);
          };

          reader.readAsDataURL(acceptedFile);
        }),
    );

    const responses = await Promise.all(promises); // Wait for all promises to resolve

    setSelectedFiles([]);
    const filesArray = [];
    responses.forEach((response, index) => {
      const base64data = response.split(',')[1];
      filesArray.push(base64data);
      setSelectedFiles((selectedFile) => [
        ...selectedFile,
        acceptedFiles[index],
      ]);
    });

    dispatch(update(id, type, filesArray));

    setLoading(false);
  };

  const uploadedFiles = selectedFiles?.map((file) => (
    <ListItem key={file.path}>
      <Typography level="body-xs">
        {file.path} - {(file.size / 1048576).toFixed(2)} MB
      </Typography>
    </ListItem>
  ));
  return (
    <Dropzone
      onDrop={(acceptedFiles) => handleFile(acceptedFiles)}
      maxFiles={10}
      disabled={loading}
    >
      {({ getRootProps, getInputProps }) => (
        <Sheet
          sx={{
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            filter: loading ? 'blur(2px)' : 'none',
          }}
          variant="soft"
          color={color}
        >
          <Sheet
            sx={{
              mb: 2, // margin bottom
              display: 'flex',
              flexDirection: 'column',
              border: '2px dashed',
            }}
            variant="outlined"
            color={color}
          >
            <div {...getRootProps()} style={{ padding: '1.5em 1em' }}>
              <input {...getInputProps()} />
              <Typography variant="body-md" textAlign="center">
                Faites glisser et déposez des fichiers ici, ou cliquez pour
                sélectionner des fichiers
              </Typography>
            </div>
          </Sheet>

          {uploadedFiles?.length ? (
            <>
              <Typography level="body-md" fontWeight="lg">
                Fichiers sélectionnés :
              </Typography>
              <List>{uploadedFiles}</List>
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
  color: PropTypes.string,
  update: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.any,
  files: PropTypes.array,
};

export default MyDropZone;
