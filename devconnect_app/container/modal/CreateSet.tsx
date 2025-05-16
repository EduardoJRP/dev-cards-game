import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form';
import { ColorSelect } from '@/components/shared';
import { CategorySelect } from '@/components/shared/CategorySelect';
import { Book, FlaskConical, Sigma } from 'lucide-react';

const colorOptions = [
  { value: 'blue', color: '#3b82f6' },
  { value: 'teal', color: '#14b8a6' },
  { value: 'green', color: '#84cc16' },
  { value: 'amber', color: '#f59e0b' },
  { value: 'red', color: '#ef4444' },
  { value: 'fuchsia', color: '#d946ef' },
  { value: 'violet', color: '#8b5cf6' },
]

const categoryOptions = [
  {
    name: 'Matemáticas',
    value: 'matematicas',
    icon: Sigma
  },
  {
    name: 'Ciencias',
    value: 'ciencias',
    icon: FlaskConical
  },
  {
    name: 'Comunicación',
    value: 'comunicacion',
    icon: Book
  }
]

export const CreateSetModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (isOpen: boolean) => {
    setIsOpen(isOpen);
  }

  return (
    <>
      <Button
        variant="outline"
        label="Crear Set"
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={handleModal}
        isShowController={false}
        title='Crea un nuevo set'
        className='flex flex-col gap-4'
      >
        <Input
          label='Nombre'
          variant='outlined'
        />

        <Input
          label='Descripción'
          variant='outlined'
        />

        <ColorSelect
          color='primary'
          options={colorOptions}
        />

        <CategorySelect
          color='primary'
          options={categoryOptions}
        />
        <Button
          label='Crear'
          variant='outline'
        />
      </Modal>
    </>
  );
};
