'use client'
import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type ColorOption = {
   value: string,
   color: string,
}

interface Props {
   className?: string,
   color: 'primary' | 'secondary' | 'accent',
   defaultValue?: string,
   options: ColorOption[],
   onChange?: (value: string) => void,
   activeError?: boolean,
}

export const ColorSelect = ({
   className,
   color,
   defaultValue,
   options,
   onChange
}: Props) => {

   const [selectedColor, setSelectedColor] = useState<string>(defaultValue || options[0]?.value || '');

   const handleColorSelect = (value: string) => {
      setSelectedColor(value)
      if (onChange) onChange(value);
   }

   const styleColor = {
      'primary': 'border border-primary dark:border-primary-dark',
      'secondary': 'border border-secondary dark:border-secondary-dark',
      'accent': 'border border-accent dark:border-accent-dark',
   }

   return (
      <div className={cn("flex items-center gap-2 rounded p-2 border border-primary", styleColor[color as keyof typeof styleColor], className)}>
         {options.map((option) => (
            <button
               key={option.value}
               style={{ backgroundColor: option.color }}
               onClick={() => handleColorSelect(option.value)}
               aria-label={`Select ${option.value} color`}
               aria-pressed={selectedColor === option.value}
               className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50",
                  "hover:scale-110",
               )}
            >
               {
                  selectedColor === option.value
                  && <Check className="h-5 w-5 text-white" />
               }
            </button>
         ))}
      </div>
   )
}