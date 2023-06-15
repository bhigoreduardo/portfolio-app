import Layout from "../../components/Layout";

const System = () => {
  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div className="flex items-center justify-end gap-4">
                <a href="/" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-emerald-600 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Voltar</a>
                <button type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar</button>
              </div>
            </div>
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Razão social</label>
                    <input placeholder="Informe a razão social" type="text" name="name" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="lastName" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Nome fantasia</label>
                    <input placeholder="Informe o nome fantasia" type="text" name="lastName" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="email" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Email</label>
                    <input placeholder="Informe o email" type="email" name="email" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="phone" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Telefone</label>
                    <input placeholder="Informe o telefone" type="tel" name="phone" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="site" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Site</label>
                    <input placeholder="Informe o site" type="tel" name="site" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="mobile" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Celular</label>
                    <input placeholder="Informe o celular" type="tel" name="mobile" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="cpfCnpj" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">CNPJ</label>
                    <input placeholder="Informe o CNPJ" type="text" name="cpfCnpj" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="rgIe" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">IE</label>
                    <input placeholder="Informe o IE" type="text" name="rgIe" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="address" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Endereço</label>
                    <input placeholder="Informe o endereço" type="text" name="address" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="city" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Cidade</label>
                    <input placeholder="Informe a cidade" type="text" name="city" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="state" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Estado</label>
                    <input placeholder="Informe o estado" type="text" name="state" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="neighborhood" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Bairro</label>
                    <input placeholder="Informe o bairro" type="text" name="neighborhood" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="cep" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">CEP</label>
                    <input placeholder="Informe o cep" type="text" name="cep" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="number" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Número</label>
                    <input placeholder="Informe o número" type="text" name="number" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="complement" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Complemento</label>
                    <input placeholder="Informe o complemento" type="text" name="complement" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap -mx-3">
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

export default System;
