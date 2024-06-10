import React from "react";
import { FormikProps } from "formik";

const style = {
  wrapper: `mb-6`,
  pageInput: `p-2.5 leading-6 rounded border border-[#667081] focus:outline-[#007298]`,
  label: `mr-5`,
  error: `text-red-500`,
};

interface FormFieldsItem {
  labelText: string;
  type: string;
  placeholderText: string;
  name: string;
  inputID: string;
}
interface FormValues {
  name: string;
  range: string;
}

interface FormFieldWithErrorProps {
  field: FormFieldsItem;
  formik: FormikProps<FormValues>;
}

export const FormFieldWithError = ({
  field,
  formik,
}: FormFieldWithErrorProps) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={field.inputID} className={style.label}>
        {field.labelText}
      </label>

      <input
        type={field.type}
        id={field.inputID}
        placeholder={field.placeholderText}
        name={field.name}
        value={formik.values[field.inputID]}
        className={style.pageInput}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <div className={style.error}>
        {formik.errors[field.inputID] &&
          formik.touched[field.inputID] &&
          formik.errors[field.inputID]}
      </div>
    </div>
  );
};
