/**
 *
 * FileDropzone
 *
 */

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function FileDropzone({
  color = 'neutral',
  bodyText = 'Faites glisser et déposez des fichiers ici, ou cliquez pour sélectionner un fichier',
  maxFiles = 1,
  update,
  field,
  files,
}) {
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

    if (maxFiles === 1) {
      dispatch(update(field, filesArray[0]));
    } else {
      dispatch(update(field, filesArray));
    }

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
      maxFiles={maxFiles}
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
                {bodyText}
              </Typography>
            </div>
          </Sheet>

          {uploadedFiles?.length > 0 || files?.length > 0 ? (
            <>
              <Typography level="body-md" fontWeight="lg">
                Fichiers sélectionnés :
              </Typography>
              {uploadedFiles?.length > 0 && <List>{uploadedFiles}</List>}
              {files?.length > 0 && uploadedFiles?.length === 0 && (
                <Typography level="body-md" fontWeight="lg">
                  1
                </Typography>
              )}
            </>
          ) : (
            <Typography level="body-xs">Aucun fichier sélectionné</Typography>
          )}
        </Sheet>
      )}
    </Dropzone>
  );
}

FileDropzone.propTypes = {
  color: PropTypes.string,
  maxFiles: PropTypes.number,
  update: PropTypes.func,
  field: PropTypes.string,
  bodyText: PropTypes.string,
  files: PropTypes.array,
};

export default FileDropzone;
