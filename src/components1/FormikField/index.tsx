import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const FormikFieldStyle = styled.div`
  margin: 1rem 0;
`;

interface FormikFieldProps {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  type = "text",
  required = false,
}) => {
  return (
    <FormikFieldStyle>
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        type={type}
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
    </FormikFieldStyle>
  );
};

export default FormikField;
