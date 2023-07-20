import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
