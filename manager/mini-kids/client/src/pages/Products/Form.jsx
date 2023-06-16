import { brands, categories, colors, sizes } from "../../utils/data";
import Layout from "../../components/Layout";

const Form = () => {
  const removeColor = i => console.log(i);

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
              <div className="flex items-center justify-end gap-4">
                <a href="/clientes" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-emerald-600 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Voltar</a>
                <button type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar</button>
              </div>
            </div>
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-box"></i>&nbsp;Informações do produto</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="sku" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Código/SKU</label>
                    <input placeholder="Informe o código/SKU" type="text" name="sku" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="barCode" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Código de barras</label>
                    <input placeholder="Informe o código de barras" type="text" name="barCode" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="ncm" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">NCM</label>
                    <input placeholder="Informe o NCM" type="text" name="ncm" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="name" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Nome</label>
                    <input placeholder="Informe o nome" type="text" name="name" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="description" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Descrição</label>
                    <textarea placeholder="Informe a descrição" name="description" id="description" cols="30" rows="10" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"></textarea>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="supply" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Fornecedor</label>
                    <select  name="supply" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                      <option value="masculino">Jorjão do Anabol</option>
                      <option value="feminino">Jurandir</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-box"></i>&nbsp;Especificações do produto</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="category" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Categoria</label>
                    {categories?.length > 0 && (
                      <select name="category" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                        <option value="">Sem categoria</option>
                        {categories.map((item, i) => (
                          <option key={i} value={item}>{item}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="brand" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Marca</label>
                    {brands?.length > 0 && (
                      <select name="brand" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                        <option value="">Sem marca</option>
                        {brands.map((item, i) => (
                          <option key={i} value={item}>{item}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="age" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Idade</label>
                    <input placeholder="Informe a idade" type="text" name="age" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="color" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Cores</label>
                    <div className="dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease w-full flex rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all flex-col gap-2 overflow-y-auto max-h-30">
                      {colors?.length > 0 && (
                        colors.map((item, i) => (
                          <span key={i} className="cursor-pointer">{item}</span>
                        ))
                      )}
                    </div>
                    {colors?.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        {colors.map((item, i) => (
                          <button key={i} title="Excluir" type="button" onClick={() => removeColor(i)} className="flex items-center h-[30px] gap-1 text-sm border border-slate-400 text-gray-700 dark:text-slate-100 py-6 px-4">
                            <span>{item}</span>
                            <i className="fas fa-user-times text-red-400"></i>
                        </button>
                        ))}
                      </div>
                    )}
                    </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="color" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Tamanhos</label>
                    <div className="dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease w-full flex rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all flex-col gap-2 overflow-y-auto max-h-30">
                      {sizes?.length > 0 && (
                        sizes.map((item, i) => (
                          <span key={i} className="cursor-pointer">{item}</span>
                        ))
                      )}
                    </div>
                    {sizes?.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        {sizes.map((item, i) => (
                          <button key={i} title="Excluir" type="button" onClick={() => removeColor(i)} className="flex items-center h-[30px] gap-1 text-sm border border-slate-400 text-gray-700 dark:text-slate-100 py-6 px-4">
                            <span>{item}</span>
                            <i className="fas fa-user-times text-red-400"></i>
                        </button>
                        ))}
                      </div>
                    )}
                    </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="weight" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Peso</label>
                    <input placeholder="Informe o peso" type="text" name="weight" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-funnel-dollar"></i>&nbsp;Informações de custo e estoque</p>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="coast" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Preço custo</label>
                    <input placeholder="Informe a preço de custo" type="text" name="coast" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="sale" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Preço venda</label>
                    <input placeholder="Informe o preço de venda" type="text" name="sale" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="discount" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Preço promocional</label>
                    <input placeholder="Informe o preço promocional de venda" type="text" name="discount" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="stockMin" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Estoque mínimo</label>
                    <input placeholder="Informe o estoque mínimo" type="text" name="stockMin" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="stock" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Estoque</label>
                    <input placeholder="Informe o estoque" type="text" name="stock" className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-image"></i>&nbsp;Imagens do produto</p>
              <div className="flex flex-wrap -mx-3 gap-4">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <div>
                    <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Capa</label>
                    <div className="flex items-center gap-2">
                      <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                        <i className="fa fa-image"></i> Capa
                        <input type="file" className="hidden"/>
                      </label>
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src="/img/products/feminino/blazer-azul.webp" className="object-cover"/>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Galeria</label>
                    <div className="flex items-center flex-wrap gap-2">
                      <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                        </svg> Galeria
                        <input type="file" multiple className="hidden"/>
                      </label>
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src="/img/products/feminino/blazer-azul.webp" className="object-cover"/>
                      </div>
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src="/img/products/feminino/blazer-azul.webp" className="object-cover"/>
                      </div>
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src="/img/products/feminino/blazer-azul.webp" className="object-cover"/>
                      </div>
                    </div>
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
