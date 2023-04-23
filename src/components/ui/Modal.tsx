import React, { MouseEventHandler, useCallback } from "react";

interface Props {
  onClose?(): void;
  visible: boolean;
  children: React.ReactNode;
}

const Modal = ({ onClose, children, visible }: Props) => {
  const handleModalClose: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      // @ts-ignore
      if (e.target.id === "container") {
        onClose && onClose();
      }
    },
    [onClose]
  );

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={handleModalClose}
    >
      {children}
    </div>
  );
};

export default Modal;
