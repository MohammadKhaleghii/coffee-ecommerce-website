import {InputHTMLAttributes} from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  iconClassNameAndStyle?: string;
}
