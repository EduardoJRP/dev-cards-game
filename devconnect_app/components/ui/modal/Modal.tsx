import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from './Dialog';

import { Button } from '@/components/ui/button';

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  className?: string;
  description?: string;
  isShowController?: boolean;
}

export const Modal = ({
  isOpen,
  onOpenChange,
  title,
  children,
  className,
  description,
  isShowController = true,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className={cn('sm:max-w-md', className)}>
          {children}
        </div>

        {isShowController && (
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button label="Cerrar" type="button" variant="outline" />
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
