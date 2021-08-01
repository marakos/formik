import React, { useRef } from "react";
import { Button, Input, InputLabel, Grid } from "@material-ui/core";

const Upload = ({ file, formProps }) => {
  const fileInput = useRef(null);
  const onChange = async (e) => {
    console.log("he");
    formProps.setFieldValue(file, e.target.files[0]);
  };

  return (
    <Grid>
      <Input
        accept='application/gzip, .tar, .tar.gz, .gz'
        type='file'
        name='file'
        ref={fileInput}
        // style={{ display: "none" }}
        onChange={onChange}
      />
      <InputLabel htmlFor='contained-button-file'>
        <Button
          variant='outlined'
          component='span'
          onClick={(e) => console.log(fileInput.current.click())}
        >
          Choose File
        </Button>
      </InputLabel>
    </Grid>
  );
};
export default Upload;
