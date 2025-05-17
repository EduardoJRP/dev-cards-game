import { cn } from '@/lib/utils'
import { TIcon } from '@/types/icon'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: TIcon
  messageError?: string | null
  error?: boolean
  success?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  label?: string
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

  const variants = {
    standard: 'border-b-2 border-gray-300',
    outlined: 'rounded-lg border border-gray-300',
    filled: 'rounded-lg bg-gray-100',
  }

  const state = cn({
    'focus-within:ring-0 focus-within:ring-red-500 border-red-500': error,
    'focus-within:ring-0 focus-within:ring-green-500 border-green-500': success,
    'focus-within:ring-1 focus-within:ring-primary': !error && !success,
    // 'focus-within:ring-1 focus-within:ring-primary/50 focus-within:outline-primary/20 outline-transparent outline-2 outline-offset-1 transition-all': !error && !success,
  })

  return (
    <fieldset className="space-y-1">
      {label &&
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      }
      <div
        className={cn(
          'relative transition-colors duration-200 p-2',
          variants[variant],
          state,
          className
        )}
      >
        <input
          aria-invalid={error}
          className={cn(
            'peer w-full bg-transparent font-medium text-gray-600 placeholder:text-gray-400 focus:outline-none',
            {
              'h-7 pl-6': variant === 'standard' && Icon,
              'h-7 ': variant === 'standard' && !Icon,
              'h-7 pl-1': (variant === 'outlined' || variant === 'filled') && Icon,
              'h-7': (variant === 'outlined' || variant === 'filled') && !Icon,
            }
          )}
          {...rest}
        />
        {
          Icon &&
          <Icon className={cn(
            'absolute top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none',
            {
              'left-0': variant === 'standard',
              'left-3': variant === 'outlined' || variant === 'filled',
            }
          )} />
        }
      </div>

      {
        error &&
        messageError &&
        <p className="mt-1 text-xs text-red-500">
          {messageError}
        </p>
      }
    </fieldset>
  )
}
