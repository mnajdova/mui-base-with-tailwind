import React from 'react';
import clsx from 'clsx';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';

interface InputProps extends InputUnstyledProps {
  color?: 'primary' | 'secondary';
  variant?: 'filled' | 'underlined' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

const InputRoot = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { ownerState, className, ...other } = props;
  const { focused, variant, size, color } = ownerState;

  return <div ref={ref} {...other} className={clsx('font-medium',
      'flex',
      'items-center',
      'text-grey-800', 'min-h-input', 'min-w-input', {
      'ring ring-pink-300 outline-none' : focused,
      'rounded-md': variant === 'bordered' || variant === 'filled',
      'border-2': variant === 'bordered',
      'border-b-2': variant === 'underlined',
      'border-pink-600': (variant === 'bordered' || variant === "underlined") && color === 'primary',
      'border-grey-500': (variant === 'bordered' || variant === "underlined") && color === 'secondary',
      'bg-neutral-300': variant === 'filled',
      'p-2': size === 'md',
      'p-3': size === 'lg',
      'p-1': size === 'sm',
    }, className)} 
  />
});

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { color = 'primary', variant = "filled", size = 'md', className, ...other } = props;

  return <InputUnstyled ref={ref} {...other}
  components={{
    Root: InputRoot,
  }}
  componentsProps={{
    root: {
      ownerState: { variant, size, color }
    },
    input: {
      className: 'bg-transparent w-full min-h-input p-2 placeholder:text-neutral-800 focus:outline-none'
    }
  }} />;
});

export default Input;