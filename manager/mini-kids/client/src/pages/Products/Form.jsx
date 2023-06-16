import { useState } from "react";

import { brands, categories, colors, sizes, variates } from "../../utils/data";
import Layout from "../../components/Layout";
import TextField from "../../components/Inputs/TextField";
import AreaField from "../../components/Inputs/AreaField";
import SelectField from "../../components/Inputs/SelectField";
import FormTitle from "../../components/Navigation/FormTitle";

const Form = () => {
  const [thumbnailFile, setThumbnailFile] = useState("");
  const [mediasFile, setMediasFile] = useState([]);

  const removeImage = id => setMediasFile(
    (prevState) => Array.from(prevState).filter((_, i) =>  i !== id)
  );

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/clientes" />

            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-box"></i>&nbsp;Informações do produto</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="sku" label="Código/SKU" icon="fa fa-code" title="Código/SKU" name="sku" placeholder="Informe o código/SKU" onChange={(e) => console.log(e.target.value)} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="barCode" label="Código de barras" icon="fa fa-barcode" title="Código de barras" name="barCode" placeholder="Informe o código de barras" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="ncm" label="NCM" icon="fa fa-file" title="NCM" name="ncm" placeholder="Informe o NCM" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome" icon="fas fa-archive" title="Nome" name="ncm" placeholder="Informe o nome" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="supply" label="Fornecedor" icon="far fa-address-card" name="supply" placeholder="Sem fornecedor"  />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="category" label="Categoria" icon="	fas fa-transgender-alt" name="category" placeholder="Sem categoria"  />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="brand" label="Marca" icon="fas fa-asterisk" name="brand" placeholder="Sem marca"  />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="age" label="Idade" icon="	fas fa-baby" title="Nome" name="age" placeholder="Informe a idade" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="weight" label="Peso (gramas)" icon="fas fa-weight" title="Peso" name="weight" placeholder="Informe o peso" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="description" label="Descrição" icon="fas fa-align-center" title="Descrição" name="description" placeholder="Informe a descrição" />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-funnel-dollar"></i>&nbsp;Variações de custo e estoque</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="coast" label="Custo" icon="fas fa-dollar-sign" title="Custo" name="coast" placeholder="Informe o preço de custo" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="sale" label="Venda" icon="fas fa-donate" title="Venda" name="sale" placeholder="Informe o preço de venda" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="discount" label="Desconto" icon="fas fa-tags" title="Desconto" name="discount" placeholder="Informe o desconto" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="stockMin" label="Estoque mínimo" icon="fas fa-dolly" title="Estoque mínimo" name="stockMin" placeholder="Informe o estoque mínimo" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="stock" label="Estoque" icon="fas fa-dolly-flatbed" title="Estoque" name="stock" placeholder="Informe o estoque" />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="color" label="Cor" icon="fas fa-coins" name="color" placeholder="Sem cor"  />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                  <SelectField id="size" label="Tamanho" icon="fas fa-compress" name="size" placeholder="Sem tamanho"  />
                </div>
              </div>
              <div className="flex flex-wrap py-3 w-full max-w-full px-3 md:w-4/12">
                <button type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Salvar variação</button>
              </div>

              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <div className="mb-4">
                    <label htmlFor="color" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Variações</label>
                    <div className="dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease w-full flex rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all flex-col gap-2 overflow-y-auto max-h-100">
                      <div>
                      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Especificações</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Preço</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Estoques</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Vendas</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {variates?.length > 0 && (
                            variates.map((item, i) => (
                              <tr key={i}>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <div className="flex px-2 py-1">
                                    <div className="flex flex-col justify-center">
                                      <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.color}</h6>
                                      <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.size}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">R${item.price} (Preço)</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">R${item.discount} (Desconto)</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">R${item.coast} (Custo)</p>
                                </td>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.stock} unids</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.minStock} unids</p>
                                </td>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.orders} vendas</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">R${item.sales}</p>
                                </td>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{item.status ? "Ativo" : "Inativo"}</span>
                                </td>
                                <td className={`${i === variates.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                  <a title="Editar" href="/produtos/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                                  <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                                </td>
                              </tr>
                            )))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-image"></i>&nbsp;Imagens do produto</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Capa</label>
                  <div className="flex items-center gap-2">
                    <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                      <i className="fa fa-image"></i>&nbsp;Capa
                      <input type="file" onChange={(e) => setThumbnailFile(e.target.files[0])} className="hidden" />
                    </label>
                    <div className="relative w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                      {!thumbnailFile ? "Sem capa" : (
                        <>
                          <i onClick={() => setThumbnailFile("")} className="absolute top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-lg cursor-pointer"></i>
                          <img src={window.URL.createObjectURL(thumbnailFile)} className="object-cover"/>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Galeria</label>
                  <div className="flex items-center flex-wrap gap-2">
                    <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                      <i className="fa fa-upload"></i>&nbsp;Galeria
                      <input type="file" multiple onChange={(e) => setMediasFile(e.target.files)} className="hidden" />
                    </label>
                    {!mediasFile?.length > 0 ? (
                      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        Sem Galeria
                      </div>
                    ) : (
                      Array.from(mediasFile).map((item, i) => (
                      <div key={i} className="relative w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <i onClick={() => removeImage(i)} className="absolute top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-lg cursor-pointer"></i>
                        <img src={window.URL.createObjectURL(item)} className="object-cover"/>
                      </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status"  />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" />
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
