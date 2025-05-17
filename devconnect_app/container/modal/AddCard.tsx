import { Modal } from '@/components/ui/modal';
import React from 'react';

interface Props {
  handleModal: (open: boolean) => void;
  isOpen: boolean
}

export const AddCardModal = ({
  handleModal,
  isOpen
}: Props) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={handleModal}
        isShowController={false}
        title='Crea un nuevo set'
        className='flex flex-col gap-4'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis nulla maiores earum voluptas distinctio deserunt, illum impedit quae adipisci. Odio maxime dicta, repellendus ea ipsum nemo neque architecto libero!
      </Modal>
    </>
  )
}