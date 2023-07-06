import { useState } from "react";

import Heading from "@/components/ui/heading";
import FormLogin from "@/components/forms/web/login";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  const title = isLogin ? 'Login' : 'Cadastro';
  const description = isLogin ? 'Digite seu email e senha para fazer login' : 'Informe seus dados pessoais para cadastrar';
  const toastMessage = isLogin ? 'Login realizado com sucesso' : 'Cadastro realizado com sucesso';
  const action = isLogin ? 'Login' : 'Cadastro';

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between border-b dark:border-slate-800 mb-4 pb-4">
        <Heading title={title} description={description} />
      </div>

      <FormLogin loading={loading} setLoading={setLoading} toastMessage={toastMessage} action={action} isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
};

export default Login;
