import { cn } from '@/lib/utils';
import { TIcon } from '@/types/icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: TIcon;
  messageError?: string | null;
  error?: boolean;
  success?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  label?: string;
}

export const Input = ({
  Icon,
  messageError,
  className = '',
  error = false,
  success = false,
  variant = 'standard',
  label,
  ...rest
}: InputProps) => {

  const wrapperClasses = cn(
    'relative transition-colors duration-200 ease-in-out bg-tertiary-light-100', {
    // Base styles by variant
    'border-b-2 border-secondary-light-300': variant === 'standard',
    'border border-transparent rounded-lg px-3': variant === 'outlined',
    'border-b-2 border-transparent bg-primary-light-300/20 px-3': variant === 'filled',

    // Focus states
    'has-[:focus]:ring-error-500 has-[:focus]:border-error-500 border-red-500': error,
    // Success state
    'has-[:focus]:border-green-500': success,

    // Default state
    'has-[:focus]:border-secondary-light-200': !error && !success,
  }, className)

  const inputClasses = cn(
    'peer w-full bg-transparent text-secondary-light-200 font-semibold appearance-none placeholder:text-secondary-light-200/70 focus:outline-none',
    {
      'h-11': variant === 'standard',
      'h-12 rounded-lg': variant === 'outlined',
      'h-12 rounded-lg bg-transparent': variant === 'filled',
    },
  )

  const iconClasses = cn('text-secondary-light-200 w-5 h-5 absolute top-1/2 -translate-y-1/2 dark:text-gray-400', {
    'left-0': variant === 'standard',
    'left-3': variant === 'outlined' || variant === 'filled',
  })

  return (
    <fieldset className='space-y-1'>
      {label
        &&
        <label className='text-sm font-semibold text-primary-light-200'>
          {label}
        </label>
      }
      <div className={wrapperClasses}>
        <input className={`${inputClasses} appearance-none `} aria-invalid={error ? 'true' : 'false'} {...rest} />

        {Icon && <Icon className={iconClasses} />}
      </div>

      {error && messageError && <p className='mt-1.5 text-xs text-error-500'>{messageError}</p>}
    </fieldset>
  )
}
