import { useState } from "react";

import useQueries from "@/hooks/use-queries";
import Heading from "@/components/ui/heading";
import FormRecoveryPassword from "@/components/forms/admin/recovery-password";

const RecoveryPassword = () => {
  const queries = useQueries();
  const [loading, setLoading] = useState(false);
  const token = queries.get('token');
  const isResetPassword = !!token;
  
  const title = !isResetPassword ? 'Recuparar senha' : 'Redefinir senha';
  const description = !isResetPassword ? 'Informe seu endereço de email para recuperar sua senha' : 'Informe a nova senha, e confirme para alterar';
  const toastMessage = !isResetPassword ? 'Verifique sua caixa de email' : 'Senha redefinida com sucesso';
  const action = !isResetPassword ? 'Redefinir senha' : 'Alterar senha';

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
      </div>

      <FormRecoveryPassword loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} isResetPassword={isResetPassword} token={token} />
    </div>
  );
};

export default RecoveryPassword;
