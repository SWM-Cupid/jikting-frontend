import ModalPortal from 'components/Modal/ModalPortal';
import * as S from 'components/Modal/style';
import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    Modal: isOpen
      ? ({ children }: { children: React.ReactNode }) => (
          <ModalPortal>
            <S.Mask onClick={closeModal} />
            <S.Wrapper>{children}</S.Wrapper>
          </ModalPortal>
        )
      : () => null,
    openModal,
    closeModal,
  };
};
