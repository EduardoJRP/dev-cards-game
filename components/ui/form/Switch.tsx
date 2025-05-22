import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';

interface SwitchProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelTop?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Switch = ({
  checked,
  onChange,
  disabled = false,
  label,
  labelTop,
  name,
  size = 'md',
}: SwitchProps) => {

  const [internalChecked, setInternalChecked] = useState(checked ?? false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internalChecked;


  const handleColorSelect = (value: string) => {
    if (onChange && name) {
      const event = {
        target: { name, value }
      } as unknown as ChangeEvent<HTMLInputElement>

      onChange(event)
    }
  }

  const toggle = () => {
    if (disabled) return;

    const newValue = !isOn;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    handleColorSelect(String(newValue));
  };

  const sizes = {
    sm: {
      width: 'w-9',
      height: 'h-5',
      circle: 'w-4 h-4',
      translate: 'translate-x-4',
    },
    md: {
      width: 'w-11',
      height: 'h-6',
      circle: 'w-5 h-5',
      translate: 'translate-x-5',
    },
    lg: {
      width: 'w-14',
      height: 'h-7',
      circle: 'w-6 h-6',
      translate: 'translate-x-7',
    },
  };

  const current = sizes[size];

  return (
    <label className="space-x-2 cursor-pointer select-none">
      {labelTop &&
        <label className="text-sm font-medium text-gray-700 block">
          {labelTop}
        </label>
      }
      <button
        type="button"
        role="switch"
        name={name}
        aria-checked={isOn}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          'relative rounded-full transition-colors ease-in-out duration-200 focus:outline-none',
          current.width,
          current.height,
          disabled
            ? 'bg-gray-300 cursor-not-allowed'
            : isOn
              ? 'bg-primary'
              : 'bg-gray-400'
        )}
      >
        <span
          className={cn(
            'absolute left-0 top-0 bottom-0 m-[2px] rounded-full bg-white transition-transform duration-200 ease-in-out',
            current.circle,
            isOn ? current.translate : 'translate-x-0'
          )}
        />
      </button>
      {label &&
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      }
    </label>
  );
};