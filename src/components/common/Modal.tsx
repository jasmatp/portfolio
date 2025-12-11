import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-2 rounded-lg h-[95vh] overflow-auto max-w-[650px] w-full relative shadow-lg">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 bg-[#4a9fd8] leading-[0] p-1 right-2 rounded-full hover:text-gray-900 h-[15px] text-center font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
