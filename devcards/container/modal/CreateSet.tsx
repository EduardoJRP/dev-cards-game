import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input, Switch } from '@/components/ui/form';
import { ColorSelect } from '@/components/shared';
import { CategorySelect } from '@/components/shared/CategorySelect';
import { Book, FlaskConical, Sigma } from 'lucide-react';
import { useForm } from '@/hook';

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
  const {
    formState,
    formValidation,
    onSubmitForm,
    onInputChange,
  } = useForm({
    activeValidation: true,
    initialState: { name: '', description: '', color: '', category: '', isPublic: false },
  });

  const handleSubmit = onSubmitForm((data) => {
    console.log(data, formState, formValidation);
  });

  const handleModal = (isOpen: boolean) => {
    setIsOpen(isOpen);
  }

  return (
    <>
      <Button
        variant="primary"
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <Input
            type='text'
            label='Nombre'
            variant='outlined'
            name='name'
            value={formState.name as string}
            error={!!formValidation.nameValid}
            onChange={onInputChange}
          />

          <Input
            type='text'
            label='Descripción'
            variant='outlined'
            name='description'
            value={formState.description as string}
            onChange={onInputChange}
            error={!!formValidation.descriptionValid}
          />

          <CategorySelect
            label='Seleccione una categoría'
            color='primary'
            options={categoryOptions}
            name='category'
            error={!!formValidation.categoryValid}
            onChange={onInputChange}
          />

          <ColorSelect
            label='Seleccione un color'
            color='primary'
            name='color'
            options={colorOptions}
            error={!!formValidation.colorValid}
            onChange={onInputChange}
          />

          <Switch
            labelTop="Hacer tu set de estudio público"
            name='isPublic'
            onChange={onInputChange}
            size='md'
          />

          <Button
            type='submit'
            label='Crear'
            variant='primary'
          />
        </form>
      </Modal>
    </>
  );
};
