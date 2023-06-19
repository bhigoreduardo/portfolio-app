import { useState } from "react";
import { toast } from "react-toastify";

import { products, variates } from "../../utils/data";
import { currencyPrice } from "../../utils/calculate";
import Layout from "../../components/Layout";
import TextField from "../../components/Inputs/TextField";
import SelectField from "../../components/Inputs/SelectField";
import AreaField from "../../components/Inputs/AreaField";
import FormTitle from "../../components/Navigation/FormTitle";

const Form = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [productsCart, setProductsCart] = useState([]);

  const getVariates = id =>
    variates.filter((item) => item.productId === id);
  const addToCart = (product, variate) =>
    setProductsCart((prevState) => [...prevState, { ...product, variate: variate, quantity: 1, discount: 0, subAmount: variate.price }]);
  const applyDiscount = (index, value) => {
    if (value > 100) return;
    const product = productsCart.find((_, i) => i === index);
    product.discount = Number(value);
  }

  const calculateSubAmount = (index) => {
    const product = productsCart.find((_, i) => i === index);

    const subAmountDiscount = product.discount
      ? (product.discount)/100 * product.variate.price * product.quantity : 0;
    const subAmount = product.discount
      ? (1 -(product.discount)/100) * product.quantity * product.variate.price
      : product.quantity * product.variate.price;

    product.subAmountDiscount = subAmountDiscount;
    product.subAmount = subAmount;
    setProductsCart((prevState) => [...prevState]);
  }

  const getAmountCart = () => productsCart.reduce((acc, cur) => acc + cur.subAmount, 0);
  const getAmoutDiscount = () => productsCart.reduce((acc, cur) => acc + (cur.subAmountDiscount ? cur.subAmountDiscount : 0), 0);
  const incrementCart = (index) => {
    const product = productsCart.find((_, i) => i === index);
    const quantity = product.quantity + 1;
    if (product.variate.stock < quantity) {
      toast.error("Quantidade máxima atingida");
      return;
    }

    product.quantity = quantity;
    calculateSubAmount(index);
  }
  const decremenetCart = (index) => {
    const product = productsCart.find((_, i) => i === index);
    const quantity = product.quantity - 1;
    if (quantity < 1) removeToCart(index);

    product.quantity = quantity;
    calculateSubAmount(index);
  }
  const removeToCart = (index) => setProductsCart((prevState) => prevState.filter((_, i) => i !== index));

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/vendas" />

            <div className="relative flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-shopping-cart"></i>&nbsp;Escolha os produtos</p>
              <TextField onChange={(e) => {setSearch(e.target.value); setShowSearch(true)}} value={search} id="search" label="Procurar" icon="fas fa-shopping-cart" title="Procurar" name="search" placeholder="Que produto você está buscando?" />

              <ul className={`${showSearch ? "opacity-100 block" : "opacity-0 hidden"} absolute z-100 top-30 left-0 right-0 max-h-100 overflow-y-auto w-full list-none dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4`}>
                <button onClick={() => {setSearch(""); setShowSearch(false)}} type="button" className="absolute right-10 top-10 text-sm font-bold leading-normal align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700">
                  <i className="fa fa-times"></i>
                </button>
                {
                  products?.length > 0 &&
                    products.map((item, i) => (
                      <li key={i} className={`flex gap-2 py-2 px-2 mb-2 border-0 rounded-t-lg rounded-xl text-inherit`}>
                        <div className="flex items-center gap-2">
                          <div>
                            <img src={item.thumbnail} alt={item.title} className="bg-white h-9 w-9 rounded-xl" />
                          </div>
                          <div className="flex flex-col">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                            <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white truncate">{item.title}</h6>
                            <span className="text-xs leading-tight dark:text-white/80 truncate">Categoria: {item.category} | Marca: {item.brand}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {
                            getVariates(item.id)?.map((value, key) => (
                              <button type="button" onClick={() => addToCart(item, value)} className="flex flex-col gap-2 p-2 border rounded-lg dark:border-white border-slate-700 group dark:hover:bg-gray-200 hover:bg-slate-700" key={key}>
                                <span className="mb-0 text-xs font-semibold leading-tight dark:text-white group-hover:dark:text-black group-hover:text-white">
                                  <span className="opacity-70">Tamanho:</span>&nbsp;{value.size}
                                </span>
                                <span className="mb-0 text-xs font-semibold leading-tight dark:text-white group-hover:dark:text-black group-hover:text-white">
                                  <span className="opacity-70">Cor:</span>&nbsp;{value.color}
                                </span>
                                <span className="text-xs leading-tight dark:text-white/80 group-hover:dark:text-black group-hover:text-white truncate">
                                  <i className="mr-1 fas fa-shopping-cart"></i>{value.stock} unids, <span className="font-semibold">R${value.price}</span>
                                </span>
                              </button>
                            ))
                          }
                        </div>
                      </li>
                    ))
                }
              </ul>

              <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Identificação</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Estoques</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Desconto (%)</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Subtotal</th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      productsCart?.length > 0 &&
                        productsCart.map((item, i) => (
                          <tr key={i}>
                            <td className={`${i ===productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                              <div className="flex px-2 py-1">
                                <div>
                                  <img src={item.thumbnail} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt={item.title} />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.sku}</h6>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.title}</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Categoria: {item.category} | Marca: {item.brand}</p>
                                  <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Tamanho: {item.variate?.size} | Cor: {item.variate?.color}</p>
                                </div>
                              </div>
                            </td>
                            <td className={`${i === productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.variate?.stock} unids</p>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.variate?.price)}</p>
                            </td>
                            <td className={`${i === productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                              <span className="flex gap-2 items-end">
                                <TextField onChange={(e) => applyDiscount(i, e.target.value)} id="discount" label="Desconto" icon="fas fa-tags" title="Desconto" name="discount" placeholder="Informe o desconto" />
                                <button type="button" onClick={() => calculateSubAmount(i)} className="block h-fit px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"><i className="fas fa-check"></i></button>
                              </span>
                            </td>
                            <td className={`${i === productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.quantity} unids</p>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.subAmount)}</p>
                            </td>
                            <td className={`${i === productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                              <button type="button" onClick={() => incrementCart(i)} title="Adicionar" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-plus-circle text-cyan-400"></i></button>
                              <button type="button" onClick={() => decremenetCart(i)} title="Remover" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-minus-circle text-orange-400"></i></button>
                              <button type="button" onClick={() => removeToCart(i)} title="Excluir" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></button>
                            </td>
                          </tr>
                        ))
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-t dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Total à pagar: {productsCart?.length === 0 ? 0 : currencyPrice.format(getAmountCart())}</p>
                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Total de desconto: {productsCart?.length === 0 ? 0 : currencyPrice.format(getAmoutDiscount())}</p>
                      </td>
                    </tr>
                  </tfoot>
              </table>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="far fa-money-bill-alt"></i>&nbsp;Informações da venda</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <SelectField id="customer" label="Cliente" icon="far fa-address-card" name="customer" placeholder="Sem cliente" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <SelectField id="payment" label="Forma pagamento" icon="far fa-address-card" name="payment" placeholder="Sem forma pagamento" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <SelectField id="saller" label="Vendedor" icon="far fa-address-card" name="saller" placeholder="Sem vendedor" />
                  </div>
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                  <div className="mb-4">
                    <SelectField id="condition" label="Parcelas" icon="far fa-address-card" name="condition" placeholder="Sem parcelas" />
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
