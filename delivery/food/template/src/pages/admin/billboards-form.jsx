/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AlertModal } from "@/components/ui/modals/modal-alert";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import FormBillboard from "@/components/forms/admin/billboard";

const BillboardsForm = () => {
  const params = useParams();
  const [billboard, setBillboard] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = params.billboardId ? 'Editar destaque' : 'Criar destaque';
  const description = params.billboardId ? 'Editar está destaque' : 'Adicionar nova destaque';
  const toastMessage = params.billboardId ? 'Destaque atualizada' : 'Destaque criada';
  const action = params.billboardId ? 'Salvar alterações' : 'Salvar';

  const getBillboard = async (id) => {
    console.log(id);
    setBillboard("");
    // const { data } = await axios.get(`/api/v1/${params.storeId}/categories/${params.categoryId}`)
    // setCategory(data);
  }
  const onDelete = async () => {
    try {
      setLoading(true);
      // await axios.delete(`/api/v1/${params.storeId}/categories/${params.categoryId}`);
      // navigate(0);
      // navigate(`/${params.storeId}/categorias`);
      toast.success('Destaque removida');
    } catch (error) {
      console.log(error);
      toast.error('Error');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }
  useEffect(() => {
    if (params.billboardId) getBillboard(params.categoryId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
        {params.billboardId && <Button disabled={loading} onClick={() => setOpen(true)} className="bg-red-600 text-white"><i className="fas fa-trash-alt h-4 w-4"></i></Button>}
      </div>
      <FormBillboard id={params.billboardId} initialData={billboard} loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </>
  );
};

export default BillboardsForm;
