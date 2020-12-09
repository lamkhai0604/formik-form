import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";

const FormikSelectStyle = styled.div`
  margin: 10px 0;
`;

export interface FormikSelectItem {
  label?: string;
  value?: string;
}

interface FormikSelectProps {
  name: string;
  items?: FormikSelectItem[];
  label?: string;
  required?: boolean;
}

interface MaterialUISelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label?: string;
  required?: boolean;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  label,
  children,
  errorString,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  name,
  items,
  label,
  required = false,
}) => {
  return (
    <FormikSelectStyle>
      <Field
        name={name}
        as={MaterialUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
        required={required}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </FormikSelectStyle>
  );
};

export default FormikSelect;
