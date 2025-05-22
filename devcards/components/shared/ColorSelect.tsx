'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { hexToRgba } from '@/lib/transform';

type ColorOption = {
  value: string
  color: string
}

interface Props {
  className?: string
  color: 'primary' | 'secondary' | 'accent'
  name?: string
  error?: boolean
  success?: boolean
  required?: boolean
  defaultValue?: string
  options: ColorOption[]
  activeError?: boolean
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ColorSelect = ({
  className,
  color,
  name,
  defaultValue,
  options,
  onChange,
  label,
  required = false,
  error = false,
  success = false,
}: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    defaultValue || options[0]?.value || ''
  )

  useEffect(() => {
    if (onChange && name) {
      const event = {
        target: { name, value: selectedColor }
      } as unknown as ChangeEvent<HTMLInputElement>

      onChange(event)
    }
  }, [])


  const handleColorSelect = (value: string) => {
    setSelectedColor(value)

    if (onChange && name) {
      const event = {
        target: { name, value }
      } as unknown as ChangeEvent<HTMLInputElement>

      onChange(event)
    }
  }

  const styleColor = {
    primary: 'hover:border-primary dark:border-primary-dark',
    secondary: 'border-secondary dark:border-secondary-dark',
    accent: 'border-accent dark:border-accent-dark',
  }
  const state = cn({
    'focus-within:ring-1 focus-within:ring-red-500 border-red-500': error,
    'focus-within:ring-1 focus-within:ring-green-500 border-green-500': success,
    // 'focus-within:ring-1 focus-within:ring-primary': !error && !success,

    // 'focus-within:ring-1 focus-within:ring-primary/50 focus-within:outline-primary/20 outline-transparent outline-2 outline-offset-1 transition-all': !error && !success,
  })

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 dark:text-gray-300 block"
        >
          {label}
        </label>
      )}

      <input
        type="hidden"
        name={name}
        value={selectedColor}
        required={required}
      />

      <div
        className={cn(
          'transition-colors flex items-center gap-2 border border-gray-300 cursor-pointer rounded-lg p-2',
          styleColor[color],
          state,
          className
        )}
      >
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => handleColorSelect(option.value)}
            aria-label={`Select ${option.value} color`}
            aria-pressed={selectedColor === option.value}
            style={{
              backgroundColor: option.color,
              outline: selectedColor === option.value
                ? `2px solid ${hexToRgba(option.color, 0.5)}`
                : 'none',
              outlineOffset: '0px'
            }}
            className={cn(
              'h-8 w-8 transition-all flex items-center justify-center rounded-full',
              'hover:scale-110'
            )}
          >
            {selectedColor === option.value && <Check className="h-5 w-5 text-white" />}
          </button>
        ))}
      </div>
    </div>
  )
}