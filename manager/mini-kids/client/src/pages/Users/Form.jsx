import Layout from "../../components/Layout";

const Form = () => {
  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div className="flex items-center justify-end gap-4">
                <a href="/usuarios" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-emerald-600 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Voltar</a>
                <button type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar</button>
              </div>
            </div>
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Nome</label>
                    <input placeholder="Informe o nome" type="text" name="name" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="lastName" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Sobrenome</label>
                    <input placeholder="Informe o sobrenome" type="text" name="lastName" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="email" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Email</label>
                    <input placeholder="Informe o email (login)" type="email" name="email" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="username" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Usuário</label>
                    <input placeholder="Informe o usuário" type="text" name="username" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="profile" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Perfil</label>
                    <select  name="profile" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                      <option value={1}>Vendedor</option>
                      <option value={2}>Administrador</option>
                    </select>
                  </div>
                </div>
                
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-lock"></i>&nbsp;Informação de segurança</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="password" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Senha</label>
                    <input placeholder="Informe a senha" type="text" name="password" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="repeatPassword" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Repetir senha</label>
                    <input placeholder="Repita a senha" type="text" name="repeatPassword" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="status" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Ativo</label>
                    <select  name="status" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                      <option value={1}>Ativo</option>
                      <option value={2}>Inativo</option>
                    </select>
                  </div>
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="obs" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Observações</label>
                    <textarea placeholder="Informe a observação" name="obs" id="obs" cols="30" rows="10" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Form;
