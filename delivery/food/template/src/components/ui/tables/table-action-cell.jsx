/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AlertModal } from "../modals/modal-alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "../dropdown-menu";
import Button from "../button";

export const TableActionCell = ({ data }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      // await axios.delete(`/api/v1/${params.storeId}/categories/${data._id}`);
      // toast.success('Category deleted.');
      // navigate(0);
    } catch (error) {
      console.log(error);
      // toast.error('Error');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  const onCopy = (id) => {
    navigator.clipboard.writeText(window.location.href + "/" +id);
    toast.success('Link copiado');
  }

  return (
    <>
      <AlertModal isOpen={open}  onClose={() => setOpen(false)} onConfirm={onConfirm} loading={loading} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="dark:text-white text-slate-700 dark:border-white border-slate-700 w-4">
            <i className="fas fa-ellipsis-h h-4 w-4"></i>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data._id)}>
            <i className="far fa-copy mr-2 h-4 w-4"></i>Copiar link
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate(`${data._id}`)}>
            <i className="fas fa-pencil-alt mr-2 h-4 w-4"></i>Atualizar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <i className="fas fa-trash-alt mr-2 h-4 w-4"></i>Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
