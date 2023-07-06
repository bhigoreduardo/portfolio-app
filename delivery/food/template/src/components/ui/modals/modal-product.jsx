/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import { ProductContext } from "@/contexts/ProductContext";
import { Modal } from "./modal";
import CardProductDetail from "../cards/card-product-detail";
import Button from "../button";

export const ProdutModal = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { product } = useContext(ProductContext);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !product) {
    return null;
  }

  return (
    <Modal
      title="Adicionar produto"
      description="Selecione os produtos desejados"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="overflow-y-auto max-h-[360px] scrollbar-none">
        <CardProductDetail {...product} />
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <div className="flex items-center space-x-2 w-fit bg-black p-2 rounded-md shadow-md h-10">
          <button type="button">
            <i className="fas fa-minus text-red-600 h-4 w-4"></i>
          </button>

          <span className="text-white">2</span>

          <button type="button">
            <i className="fas fa-plus text-[#00ccbb] h-4 w-4"></i>
          </button>
        </div>
        <Button onClick={onClose} className="bg-black text-white h-10"><i className="fa fa-shopping-cart text-white text-sm mr-2"></i>Adicionar</Button>
      </div>
    </Modal>
  );
};
