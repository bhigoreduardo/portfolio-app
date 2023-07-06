/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

import api from "@/libs/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "../dropdown-menu";
import { ProdutListModal } from "../modals/modal-product-list";
import Button from "../button";


export const TableProductCell = ({ data }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    const { data } = await api.get(`/products`);
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProdutListModal isOpen={open}  onClose={() => setOpen(false)} products={products} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="dark:text-white text-slate-700 dark:border-white border-slate-700 w-4">
            <i className="fas fa-ellipsis-h h-4 w-4"></i>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <i className="fas fa-cart-plus mr-2 h-4 w-4"></i>Adicionar produto
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate(`${data._id}`)}>
            <i className="fas fa-file-pdf mr-2 h-4 w-4"></i>Imprimir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
