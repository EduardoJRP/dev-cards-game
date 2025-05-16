import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/form/Select';
import { cn } from '@/lib/utils';
import { TIcon } from '@/types/icon';

type CategoryOption = {
  name: string,
  icon: TIcon,
  value: string
}

interface Props {
  className?: string
  color: 'primary' | 'secondary' | 'accent',
  options: CategoryOption[],
  onChange?: (value: string) => void,
}

export const CategorySelect = ({
  className,
  color,
  options,
  onChange
}: Props) => {

  const styleColor = {
    'primary': 'border border-primary dark:border-primary-dark',
    'secondary': 'border border-secondary dark:border-secondary-dark',
    'accent': 'border border-accent dark:border-accent-dark',
  }

  return (
    <Select>
      <SelectTrigger className={cn("w-full", styleColor[color as keyof typeof styleColor], className)}>
        <SelectValue placeholder="Selecciona una materia" />
      </SelectTrigger>
      <SelectContent>
        {
          options.map((options) => (
            <SelectItem
              key={options.name}
              value={options.name}
              onClick={() => onChange && onChange(options.value)}
              aria-label={`Select ${options.name} category`}
              aria-pressed
              className='space-y-2'
            >
              <options.icon className="mr-2 h-4 w-4" />
              <span>{options.name}</span>
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}
