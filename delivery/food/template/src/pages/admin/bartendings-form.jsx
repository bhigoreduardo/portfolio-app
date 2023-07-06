/* eslint-disable react/prop-types */
import { useState } from "react";

import FormBartending from "@/components/forms/admin/bartending";
import Heading from "@/components/ui/heading";

const BartendingsForm = () => {
  const [loading, setLoading] = useState(false);

  const title = 'Criar mesa';
  const description = 'Adicionar nova mesa';
  const toastMessage = 'Mesa criada';
  const action = 'Salvar';

  return (
    <>
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
      </div>
      <FormBartending loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </>
  );
};

export default BartendingsForm;
