import React, { useRef } from "react";
import { Button, Input, Typography, Grid } from "@material-ui/core";

const Upload = ({ file, formProps }) => {
  return (
    <Grid>
      <Typography>Upload File</Typography>
      <Input
        accept='application/x-gzip'
        type='file'
        name='file'
        onChange={(e) => formProps.setFieldValue(file, e.target.files[0])}
      />
    </Grid>
  );
};
export default Upload;
