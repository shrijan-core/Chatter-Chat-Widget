export type InputProps = {
  register?: any;
  name: string;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrors<any>>
    | undefined;
  label?: string;
  type: string;
  hasError?: boolean;
  placeholder?: string;
  helperText?: string;
  containerStyle?: string;
  children?: JSX.Element;
};
