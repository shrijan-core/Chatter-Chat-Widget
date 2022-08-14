import React from 'react';

// packages
import { motion } from 'framer-motion';

// types
import { WidgetToggleProps } from './types';

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 99%)'
    strokeLinecap='round'
    {...props}
  />
);

const DefaultToggleIcon = () => {
  return (
    <svg width='27' height='27' viewBox='0 0 27 27'>
      <Path
        variants={{
          closed: { opacity: 0, d: 'M 7.5 14.5 L 19 14.5' },
          open: { opacity: 1, d: 'M 7 7 L 20 20' },
        }}
        transition={{ duration: 0.2 }}
      />

      <Path
        variants={{
          closed: { opacity: 0, d: 'M 7.5 8.5 L 19 8.5' },
          open: { opacity: 1, d: 'M 7 20 L 20 7' },
        }}
        transition={{ duration: 0.2 }}
      />

      <Path
        d='M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 0.4, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const DefaultCloseIcon = () => {
  const iconSize = 20;
  return (
    <motion.svg
      width={iconSize}
      height={iconSize}
      viewBox={`0 0 ${iconSize} ${iconSize}`}
      initial='hidden'
      animate='visible'
    >
      <motion.line
        x1={iconSize}
        y1='0'
        x2='0'
        y2={iconSize}
        stroke='#fff'
        variants={draw}
        custom={1}
      />
      <motion.line
        x1={iconSize}
        y1={iconSize}
        x2='0'
        y2='0'
        stroke='#fff'
        variants={draw}
        custom={2}
      />
    </motion.svg>
  );
};

const WidgetToggle = ({ toggle, isOpen }: WidgetToggleProps) => {
  return (
    <button
      onClick={toggle}
      aria-label={`${isOpen ? 'Close' : 'Open'} chat widget`}
      className='w-[60px] h-[60px] rounded-full bg-primary-500 flex justify-center items-center absolute bottom-10 right-10 shadow-main'
    >
      {isOpen ? <DefaultCloseIcon /> : <DefaultToggleIcon />}
    </button>
  );
};

export default WidgetToggle;
