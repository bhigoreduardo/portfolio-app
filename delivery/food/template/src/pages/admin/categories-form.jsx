/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AlertModal } from "@/components/ui/modals/modal-alert";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import FormCategory from "@/components/forms/admin/category";

const CategoriesForm = () => {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = params.categoryId ? 'Editar categoria' : 'Criar categoria';
  const description = params.categoryId ? 'Editar está categoria' : 'Adicionar nova categoria';
  const toastMessage = params.categoryId ? 'Categoria atualizada' : 'Categoria criada';
  const action = params.categoryId ? 'Salvar alterações' : 'Salvar';

  const getCategory = async (id) => {
    console.log(id);
    setCategory("");
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
    if (params.categoryId) getCategory(params.categoryId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
        {params.categoryId && <Button disabled={loading} onClick={() => setOpen(true)} className="bg-red-600 text-white"><i className="fas fa-trash-alt h-4 w-4"></i></Button>}
      </div>
      <FormCategory id={params.categoryId} initialData={category} loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </>
  );
};

export default CategoriesForm;
