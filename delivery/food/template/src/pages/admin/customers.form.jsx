/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AlertModal } from "@/components/ui/modals/modal-alert";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import FormCustomer from "@/components/forms/admin/customer";

const CustomersForm = () => {
  const params = useParams();
  const [customer, setCustomer] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = params.customerId ? 'Editar cliente' : 'Criar cliente';
  const description = params.customerId ? 'Editar este cliente' : 'Adicionar novo cliente';
  const toastMessage = params.customerId ? 'Cliente atualizado' : 'Cliente criado';
  const action = params.customerId ? 'Salvar alterações' : 'Salvar';

  const getCustomer = async (id) => {
    console.log(id);
    setCustomer("");
    // const { data } = await axios.get(`/api/v1/${params.storeId}/categories/${params.categoryId}`)
    // setCategory(data);
  }
  const onDelete = async () => {
    try {
      setLoading(true);
      // await axios.delete(`/api/v1/${params.storeId}/categories/${params.categoryId}`);
      // navigate(0);
      // navigate(`/${params.storeId}/categorias`);
      toast.success('Category removida');
    } catch (error) {
      console.log(error);
      toast.error('Error');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }
  useEffect(() => {
    if (params.customerId) getCustomer(params.customerId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
        {params.customerId && <Button disabled={loading} onClick={() => setOpen(true)} className="bg-red-600 text-white"><i className="fas fa-trash-alt h-4 w-4"></i></Button>}
      </div>
      <FormCustomer id={params.customerId} initialData={customer} loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </>
  );
};

export default CustomersForm;
