import React from "react";
import { Field, Form, Formik } from "formik";

const App: React.FC = () => {
  const handleSubmit = (values: any) => {
      console.log(`Email: ${values.email}, Password: ${values.password}`);
  };
  return (
    <div className="App">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {(props: any) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field autoComplete="off" name="email" />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <Field autoComplete="off" name="password" />
            </div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
