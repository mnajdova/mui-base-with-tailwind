import React from 'react';
import clsx from 'clsx';
import SelectUnstyled, { SelectUnstyledProps, SelectUnstyledOwnerState } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { OptionUnstyledProps } from '@mui/base/OptionUnstyled';
import { CaretDownFill, CaretUpFill } from 'grommet-icons';
import { OptionState } from '@mui/base/ListboxUnstyled';

interface SelectProps<TValue> extends SelectUnstyledProps<TValue> {
  color?: 'primary' | 'secondary';
  variant?: 'filled' | 'underlined' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
}

interface SelectOptionStyledProps<TValue> extends OptionUnstyledProps<TValue> { ownerState: OptionUnstyledProps<TValue> & OptionState }

const SelectOptionStyled = React.forwardRef(function SelectOptionStyled<TValue>(
  props: SelectOptionStyledProps<TValue>,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const { className, ownerState, ...rest } = props;

  const { selected, highlighted } = ownerState;

  // @ts-ignore
  return <li className={clsx(className, 'p-2', {
    'hover:bg-pink-100': !selected && !highlighted,
    "bg-pink-200": highlighted,
    'bg-pink-300': selected,
    'hover:bg-pink-400': selected || highlighted,
  })} {...rest} ref={ref} />
});

interface SelectOptionProps<TValue> extends OptionUnstyledProps<TValue> {}

export const SelectOption = React.forwardRef(function SelectOption<TValue>(props: SelectOptionProps<TValue>, ref: React.ForwardedRef<HTMLLIElement>) {
  return <OptionUnstyled component={SelectOptionStyled} {...props} ref={ref}></OptionUnstyled>
});

interface SelectButtonStyledProps<TValue> extends SelectProps<TValue> { className?: string, ownerState: SelectUnstyledOwnerState<TValue> }

const SelectButtonStyled = React.forwardRef(function SelectButton<TValue = string>(props: SelectButtonStyledProps<TValue>, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { className, variant, color, size, ownerState, children, ...rest } = props;

  // @ts-ignore
  return <button className={clsx('font-medium',
    'flex', 'items-center',
    'focus:outline-none focus:ring focus:ring-pink-300',
    'text-grey-800', 'min-h-input', 'min-w-input', {
    'rounded-md': (variant === 'bordered' || variant === 'filled') && !ownerState.open,
    'rounded-t-md': (variant === 'bordered' || variant === 'filled') && ownerState.open,
    'border-2': variant === 'bordered',
    'border-b-2': variant === 'underlined',
    'border-pink-600': (variant === 'bordered' || variant === "underlined") && color === 'primary',
    'border-grey-500': (variant === 'bordered' || variant === "underlined") && color === 'secondary',
    'bg-neutral-300': variant === 'filled',
    'p-3': size === 'sm',
    'p-4': size === 'md',
    'p-5': size === 'lg',
  }, 
  className)} ref={ref} {...rest}>{children}{ownerState.open ? <CaretUpFill className="ml-auto" /> : <CaretDownFill className="ml-auto" />}</button>;
})

const Select = React.forwardRef(function Select<TValue>(props: SelectProps<TValue>, ref: React.ForwardedRef<HTMLUListElement>) {
  const { color = 'primary', variant = "filled", size = 'md', ...other } = props;

  return <SelectUnstyled ref={ref} {...other}
  components={{
    Root: SelectButtonStyled,
  }}
  componentsProps={{
    // @ts-ignore custom props for the root slot
    root: { variant, color, size },
    listbox: {
      className: 'border border-grey-500 min-w-input z-10 bg-white'
    }
  }} />;
});

export default Select;