import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="bg-purple-700 text-white hover:bg-purple-800 font-bold py-2 px-4 w-3/4"
      {...props}
    >
      {label}
    </button>
  );
};
