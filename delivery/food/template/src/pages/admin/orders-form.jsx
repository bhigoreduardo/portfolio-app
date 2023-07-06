/* eslint-disable react/prop-types */
import { useState } from "react";

import Heading from "@/components/ui/heading";
import FormOrder from "@/components/forms/admin/order";

const OrdersForm = () => {
  const [loading, setLoading] = useState(false);

  const title = 'Criar Pedido';
  const description = 'Adicionar novo pedido';
  const toastMessage = 'Pedido criado';
  const action = 'Salvar';

  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
      </div>
      <FormOrder loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </>
  );
};

export default OrdersForm;
