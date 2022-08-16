import React from 'react';

// types
import type { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ size, src, avatarStyle }) => {
  return (
    <div
      className={`
      relative
      bg-primary-500 rounded-full text-primary-100 
      ${size === 'sml' && 'h-10 w-10'}
      ${size === 'lrg' && 'h-60 w-60'}
      ${avatarStyle} 
      `}
      style={
        typeof size === 'number'
          ? {
              height: size,
              width: size,
              minWidth: size,
              minHeight: size,
            }
          : {}
      }
    >
      {src ? (
        <img
          className='object-cover h-full w-full rounded-full'
          src={src}
          alt='avatar'
        />
      ) : (
        <div className='h-full w-full flex items-center justify-center'>
          <i className='fa fa-user' />
        </div>
      )}
    </div>
  );
};
export default Avatar;
