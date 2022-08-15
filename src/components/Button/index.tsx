import React from 'react';

// types
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
  const SolidButton: React.FC<ButtonProps> = ({
    size,
    type,
    width,
    title,
    onClick,
    withIcon,
    iconName,
    containerStyles,
    titleStyles,
  }) => {
    return (
      <button
        type={type || 'button'}
        className={`px-4 bg-primary-500 rounded-lg max-w-[388px] hover:opacity-80 text-neutral-100
        transition-all duration-200 ease-in-out
        ${size === 'small' ? 'py-2.5' : 'py-4'}
        ${containerStyles}
        `}
        style={{ width: width || '' }}
        onClick={onClick}
      >
        <div className='flex flex-row items-center justify-center'>
          {withIcon && iconName && (
            <i className={`fa fa-${iconName} mr-4 text-lg`} />
          )}
          <p className={`text-p font-semi-bold ${titleStyles}`}>{title}</p>
        </div>
      </button>
    );
  };

  const OutlineButton: React.FC<ButtonProps> = ({
    size,
    type,
    width,
    title,
    onClick,
    withIcon,
    iconName,
    containerStyles,
    titleStyles,
  }) => {
    return (
      <button
        type={type || 'button'}
        className={`px-4 border-solid border border-neutral-300 rounded-lg max-w-[388px] text-primary-500
        hover:border-primary-500
        transition-all duration-200 ease-in-out
        ${size === 'small' ? 'py-2.5' : 'py-4'}
        ${containerStyles}
        `}
        style={{ width: width || '' }}
        onClick={onClick}
      >
        <div className='flex flex-row justify-center items-center'>
          {withIcon && iconName && (
            <i className={`fa fa-${iconName} mr-4 text-lg`} />
          )}
          <p className={`text-p font-semi-bold ${titleStyles}`}>{title}</p>
        </div>
      </button>
    );
  };

  return props.buttonType === 'outline' ? (
    <OutlineButton {...props} />
  ) : (
    <SolidButton {...props} />
  );
};

export default Button;
