import React from 'react';

// Packages
import Select, { components } from 'react-select';
import { Controller } from 'react-hook-form';

// Types
import { DropdownProps } from './types';
import {
  MenuProps,
  OptionProps,
  ControlProps,
  DropdownIndicatorProps,
} from 'react-select';

const Dropdown: React.FC<DropdownProps> = ({
  icon,
  name,
  label,
  isMulti,
  hasError,
  isDisabled,
  placeholder,
  errorMessage,
  defaultItem,
  dropDownItems,
  containerStyle,
  control: Control,
}) => {
  // 1. Customizing components as required.
  // 1.2 DropdownIndicator Component
  const dropdownIndicator = (props: DropdownIndicatorProps) => (
    <span
      className='
          absolute grid place-content-center
          w-[50px] h-12 top-1/2 -translate-y-1/2
          right-0
          '
    >
      <i
        className={`
        transition-transform ease-out
        duration-200
        fa fa-${icon ? icon : 'angle-down'}
        ${props.isFocused ? 'transform rotate-180' : 'transform rotate-0'}
        `}
      />
    </span>
  );

  // 1.3 Control Component
  const control = (props: ControlProps) => {
    return (
      <div
        className={`
        text-neutral-700 w-full mb-4
        ${props.isFocused && 'text-error-900'}
        `}
      >
        {label && (
          <span
            className={`
            block text-s ml-1 mb-1 capitalize
            ${hasError && 'text-error-500'}
            ${props.isFocused && 'text-primary-500'}
            `}
          >
            {label}
          </span>
        )}
        <components.Control {...props} className='!border-none'>
          <div
            className={`
            py-3 pl-[15px] pr-[49px] w-full
            rounded border border-neutral-300
            relative text-left text-p
            border-1 flex items-center

            ${!isMulti && 'max-h-12'}
            ${hasError && '!border-error-500'}
            ${
              !hasError &&
              props.isFocused &&
              'border-primary-500 text-neutral-900'
            }
          `}
          >
            {props.children}
          </div>
        </components.Control>
        {errorMessage && (
          <span
            className={`
            block
            text-s ml-1 mt-1 text-neutral-700
            ${hasError && 'text-error-500'}
          `}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  };

  // 1.4 Menu Component
  const menu = (props: MenuProps) => {
    return (
      <components.Menu
        {...props}
        className='!border-0 !rounded-lg !shadow-none !mt-0'
      >
        <div
          className='
          bg-neutral-100 text-neutral-800
          divide-gray-100 rounded-lg px-5 py-3
          border border-neutral-300'
        >
          {props.children}
        </div>
      </components.Menu>
    );
  };

  // 1.5 Option Component
  const option = (props: OptionProps) => {
    return (
      <components.Option
        {...props}
        className={`
        text
        ease-in-out
        block w-full rounded
        transition-all duration-200
        cursor-pointer
        ${props.isDisabled && '!text-neutral-500'}
        ${props.isDisabled && '!cursor-not-allowed'}
        `}
      >
        {props.children}
      </components.Option>
    );
  };

  // 2. CustomStyles
  // [Note:] Here i have used any instead of CSSProperties
  // Because assigning type 'CSSProperties show error idk why
  // Please help..
  const customStyles = {
    container: (base: any, state: any) => ({
      ...base,
      width: '100%',
      maxWidth: '388px',
    }),

    option: (base: any, state: OptionProps) => {
      return {
        ...base,
        padding: '0.75rem 1rem',
        // ! if option is selected backgroundColor changes to primary-500 and
        // ! text color changes to primary-100.

        // ! if option is focused/hovered backgroundColor changes to primary-100 and
        // ! text color changes to primary-600.
        backgroundColor: state.isSelected
          ? '#3b9df7'
          : state.isFocused
          ? '#ecf5fe'
          : undefined,
        color: state.isSelected
          ? '#fdfdfd'
          : state.isFocused
          ? '#1685f3'
          : undefined,

        // ! onHover backgroundColor changes to primary-100
        // ! onHover color changes to primary-600
        '&:hover': {
          backgroundColor: state.isFocused ? '#ecf5fe' : undefined,
          color: state.isFocused ? '#1685f3' : undefined,
        },

        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },

    valueContainer: (base: any) => {
      return {
        ...base,
        margin: 0,
        padding: 0,
        width: '100%',
        maxWidth: '322px',
      };
    },

    singleValue: (base: any) => {
      return {
        ...base,
        margin: 0,
        padding: 0,
        width: '100%',
        color: 'inherit',
      };
    },

    menuList: (base: any) => {
      return {
        ...base,
        padding: 0,
        margin: 0,
      };
    },

    placeholder: (base: any) => {
      return {
        ...base,
        margin: 0,
      };
    },

    input: (base: any) => {
      return {
        ...base,
        padding: '0',
        margin: '0',
      };
    },
  };

  return (
    <>
      <Controller
        name={name}
        control={Control}
        defaultValue={defaultItem}
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          return (
            <Select
              ref={ref}
              name={name}
              value={value}
              onBlur={onBlur}
              isMulti={isMulti}
              isClearable={false}
              maxMenuHeight={264}
              onChange={onChange}
              isSearchable={false}
              styles={customStyles}
              options={dropDownItems}
              isDisabled={isDisabled}
              closeMenuOnSelect={!isMulti}
              placeholder={placeholder ?? 'Select'}
              className={`border-none ${containerStyle}`}
              components={{
                Menu: menu,
                Option: option,
                Control: control,
                IndicatorSeparator: () => null,
                DropdownIndicator: dropdownIndicator,
              }}
            />
          );
        }}
      />
    </>
  );
};
export default Dropdown;
