/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Modal } from "./modal";
import CardProduct from "../cards/card-product";
import Button from "../button";
import NoResults from "../no-results";

export const ProdutListModal = ({ isOpen, onClose, products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Adicionar produto"
      description="Selecione os produtos desejados"
      isOpen={isOpen}
      onClose={onClose}
    > 
      {!products?.length > 0
        ? (<NoResults />)
        : (
          <div className="overflow-y-auto max-h-[360px] flex flex-col gap-2 scrollbar-none overflow-x-hidden">
            {products.map((item, i) => (
              <CardProduct key={i} product={item} modal />
            ))}
          </div>
        )
      }
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button onClick={onClose} className="bg-black text-white h-10">Fechar</Button>
      </div>
    </Modal>
  );
};
