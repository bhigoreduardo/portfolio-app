/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Modal } from "./modal";
import Button from "../button";


export const AlertModal = ({ isOpen, onClose, onConfirm, loading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Tem certeza?"
      description="Está ação não pode ser revertida"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} onClick={onClose} className="bg-slate-700 text-white">Cancelar</Button>
        <Button disabled={loading} onClick={onConfirm} className="text-white bg-red-600">Confirmar</Button>
      </div>
    </Modal>
  );
};
