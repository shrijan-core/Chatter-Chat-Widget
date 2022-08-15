import React, { useState } from 'react';

// types
import type { InputProps } from './types';

// 1. Default input
const DefaultInputComponent = ({
  name,
  label,
  children,
  hasError,
  register,
  type,
  placeholder,
  errorMessage,
  containerStyle,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChildrenVisible, setIsChildrenVisible] = useState(false);

  return (
    <div className={`w-full max-w-[388px] h-full mb-4 ${containerStyle}`}>
      <div
        className={`
          w-full relative flex flex-col-reverse
          text-neutral-700  
          focus-within:text-neutral-900
          `}
      >
        {/* this children toggles */}
        {children && (
          <div
            className='
            w-fit h-fit absolute top-full left-1/2 -translate-x-1/2 '
          >
            {isChildrenVisible ? children : null}
          </div>
        )}
        <input
          id={name}
          name={name}
          className={`
            w-full p-2 text-lg border-neutral-300 
            border-1 rounded-4 outline-0
            h-12 py-3 px-4 
            text-neural-900
            font-regular
            text-p
            peer

            placeholder:text-neutral-700 
            focus:border-primary-500 
            ${hasError && '!border-error-500 !focus:border-error-500'}
            ${type === 'password' ? 'pr-12' : ''}`}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          {...register(name)}
        />
        {/* label here */}
        {label && (
          <label
            className={`
              capitalize  ml-1 mb-1
              text-s leading-h6 font-regular text-neutral-700
              peer-focus:text-primary-700
              ${hasError && '!text-error-500'}
              `}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        {type === 'password' && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className='
              text-lg h-12 w-14 border-none
              absolute right-0 bottom-0
              '
            type='button'
          >
            <i className={`fa fa-${!showPassword ? 'eye-slash' : 'eye'}`} />
          </button>
        )}
      </div>

      {errorMessage && (
        <span
          className={`block mt-1 ml-1 text-s leading-h6 font-regular text-neutral-700
          ${hasError && 'text-error-500'}
          `}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

const ChatterInput = ({
  name,
  label,
  children,
  hasError,
  type,
  helperText,
  register,
  placeholder,
  errorMessage,
  containerStyle,
}: InputProps) => {
  return (
    <DefaultInputComponent
      register={register}
      name={name}
      label={label}
      hasError={hasError}
      type={type}
      helperText={helperText}
      errorMessage={errorMessage}
      placeholder={placeholder}
      containerStyle={containerStyle}
    >
      {children}
    </DefaultInputComponent>
  );
};

export default ChatterInput;
