export type DropdownProps = {
  name: string;
  icon?: string;
  label?: string;
  isMulti?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  containerStyle?: string;
  defaultItem?: DropdownItemProps;
  dropDownItems: DropdownItemProps[];
  control: Control<FieldValues, object>;
  errorMessage?:
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>
    | undefined;
};

export type DropdownItemProps = {
  value: string;
  label: string;
  isDivider?: boolean;
  isDisabled?: boolean;
};
