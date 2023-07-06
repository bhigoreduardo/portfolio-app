/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Modal } from "./modal";

export const CheckoutModal = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Pedido enviado"
      description="Pedido realizado com sucesso"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex flex-col items-center justify-center w-full">
        <div className="flex items-center gap-5">
          <div>
            <p className="text-lg text-gray-400">Após pronto estimativa de entrega</p>
            <p className="text-lg font-bold">40-60 Minutes</p>
          </div>
          <img src="/images/delivery.gif" alt="Entrega" className="h-20 w-20" />
        </div>
        <p className="mt-3 text-slate-600">
          Pedido enviado para a loja, aguardando loja aceitar e preparar seu pedido
        </p>
      </div>
    </Modal>
  );
};
