import { cn } from '@/lib/utils';
import { TIcon } from '@/types/icon';
import { ChangeEvent } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/form/Select'

type CategoryOption = {
  name: string
  icon: TIcon
  value: string
}

interface Props {
  name?: string
  className?: string
  color: 'primary' | 'secondary'
  options: CategoryOption[]
  label?: string,
  error?: boolean
  success?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CategorySelect = ({
  name,
  className,
  color,
  options,
  onChange,
  label,
  error = false,
  success = false,
}: Props) => {

  const handleColorSelect = (value: string) => {
    if (onChange && name) {
      const event = {
        target: { name, value }
      } as unknown as ChangeEvent<HTMLInputElement>

      onChange(event)
    }
  }

  const styleColor = {
    primary: 'border border-gray-300 focus-within:border-primary has-focus-within:border-primary',
    secondary: 'border border-gray-500 dark:border-gray-400',
  }

  const state = cn({
    'focus-within:ring-1 focus-within:ring-red-500 border-red-500': error,
    'focus-within:ring-1 focus-within:ring-green-500 border-green-500': success,
    // 'focus-within:ring-1 focus-within:ring-primary': !error && !success,
    // 'focus-within:ring-1 focus-within:ring-primary/50 focus-within:outline-primary/20 outline-transparent outline-2 outline-offset-1 transition-all': !error && !success,
  })

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block">
          {label}
        </label>
      )}

      <Select
        name={name}
        onValueChange={handleColorSelect}
      >
        <SelectTrigger
          className={cn(
            'w-full min-h-11 cursor-pointer',
            styleColor[color],
            state,
            className
          )}
        >
          <SelectValue placeholder="Selecciona una materia" />
        </SelectTrigger>
        <SelectContent
          className='w-full'
        >
          {options.map(({ name, icon: Icon, value }) => (
            <SelectItem
              key={value}
              value={value}
              className="flex items-center gap-2"
            >
              <Icon className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              <span className='font-medium text-gray-600 dark:text-gray-300'>
                {name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
