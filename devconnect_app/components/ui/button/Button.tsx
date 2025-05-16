import clsx from 'clsx';
import { ReactNode } from 'react';

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
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg transition-colors font-medium cursor-pointer';

  const sizeClasses = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-base',
    lg: 'py-4 px-5 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-secondary-light-300 text-white hover:bg-secondary-light-200/80 disabled:bg-brand-300',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50',
    error:
      'bg-error-400/80 text-white hover:bg-error-400/90 disabled:opacity-50',
  };

  const combinedClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    {
      'cursor-not-allowed opacity-50': disabled,
    },
    className
  );

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {label}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
}

