import React from 'react';
import clsx from 'clsx';
import ButtonUnstyled, { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

interface ButtonProps extends ButtonUnstyledProps {
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'filled' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { color = 'primary', variant = "filled", size = 'md', className, ...other } = props;

  return <ButtonUnstyled ref={ref} {...other} className={clsx('rounded-md', 'font-medium', 'focus:outline-none', 'focus:ring', 'focus:ring-pink-200', {
    'bg-pink-700': variant === 'filled' && color === 'primary',
    'hover:bg-pink-900': variant === 'filled' && color === 'primary',
    'text-white': variant === 'filled' && color === 'primary',
    'text-pink-600': (variant === 'text' || variant === 'bordered') && color === 'primary',
    'hover:bg-pink-100': (variant === 'text' || variant === 'bordered') && color === 'primary',
    'hover:text-pink-800': (variant === 'text' || variant === 'bordered') && color === 'primary',
    'border-2': variant === 'bordered',
    'border-pink-600': variant === 'bordered' && color === 'primary',
    'border-grey-500': variant === 'bordered' && color === 'secondary',
    'bg-neutral-200': variant === 'filled' && color === 'secondary',
    'text-neutral-800': variant === 'filled' && color === 'secondary',
    'hover:bg-neutral-300': variant === 'filled' && color === 'secondary',
    'text-neutral-700': (variant === 'text' || variant === "bordered") && color === 'secondary',
    'hover:bg-neutral-100': (variant === 'text' || variant === 'bordered') && color === 'secondary',
    'hover:text-neutral-800': (variant === 'text' || variant === 'bordered') && color === 'secondary',
    'p-2': size === 'md',
    'p-3': size === 'lg',
    'p-1': size === 'sm',
    'text-lg': size === 'lg',
    'text-sm': size === 'sm',
  }, 
  className)} />;
});

export default Button;