import React from "react";
import { Formik, Form, useFormik } from "formik";
import { Container, Grid, Button } from "@material-ui/core";
import Upload from "./Form";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  file: yup.mixed().required("Required"),
  file2: yup.mixed().required("Required"),
});

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid>
          <Formik
            initialValues={{ file: "", file2: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              console.log(values);
              let data = new FormData();
              await data.append("file", values.file);
              console.log(data);
            }}
          >
            {(formProps) => (
              <Form>
                <Grid>
                  <Upload file='file' formProps={formProps} />
                </Grid>
                <Grid>
                  <Upload file='file2' formProps={formProps} />
                </Grid>
                <Button type='submit'>Submit</Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
