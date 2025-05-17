import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline' | 'error';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button = ({
  label,
  size = 'md',
  variant = 'primary',
  startIcon,
  endIcon,
  className,
  disabled,
  ...props
}: ButtonProps) => {

  const sizeClasses = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg',
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 disabled:bg-primary',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50',
    error: 'bg-red-500 text-white hover:bg-red-600 disabled:opacity-50',
  };


  return (
    <button
      disabled={disabled}
      className={cn(
        'transition-colors inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer',
        sizeClasses[size],
        variantClasses[variant],
        {
          'cursor-not-allowed opacity-50': disabled,
        },
        className
      )}
      {...props}
    >
      {
        startIcon &&
        <span className="flex items-center">
          {startIcon}
        </span>
      }

      <span>
        {label}
      </span>

      {
        endIcon &&
        <span className="flex items-center">
          {endIcon}
        </span>
      }
    </button>
  );
};
