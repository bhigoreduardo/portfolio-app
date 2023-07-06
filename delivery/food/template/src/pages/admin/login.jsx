import { useState } from "react";

import Heading from "@/components/ui/heading";
import FormLogin from "@/components/forms/admin/login";

const Login = () => {
  const [loading, setLoading] = useState(false);
  
  const title = 'Login';
  const description = 'Digite seu email e senha para fazer login';
  const toastMessage = 'Login realizado com sucesso';
  const action = 'Login';

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
      </div>

      <FormLogin loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} />
    </div>
  );
};

export default Login;
