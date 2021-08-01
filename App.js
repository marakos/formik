import React from "react";
import { Formik, Form, useFormik, ErrorMessage } from "formik";
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
            }}
          >
            {(formProps) => (
              <Form>
                <Grid>
                  <Upload file='file' formProps={formProps} />
                  <ErrorMessage name='file'>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </Grid>
                <Grid>
                  <Upload file='file2' formProps={formProps} />
                  <ErrorMessage name='file2'>
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
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
