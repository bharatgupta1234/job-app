import React from "react";

interface Props {
  onClose?(): void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;
