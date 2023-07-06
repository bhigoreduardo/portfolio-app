import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

// import { products, variates } from "../../utils/data";
import api from "../../libs/api";
import { condition } from "../../utils";
import { currencyPrice } from "../../utils/calculate";
import Layout from "../../components/Layout";
import TextField from "../../components/Inputs/TextField";
import SelectField from "../../components/Inputs/SelectField";
import AreaField from "../../components/Inputs/AreaField";
import FormTitle from "../../components/Navigation/FormTitle";
import { UserContext } from "../../contexts/UserContext";

const saleSchema = yup.object().shape({
  customer: yup.number().required("Cliente é obrigatório"),
  paymentMethod: yup.number().required("Forma de pagamento é obrigatório"),
  amountPayment: yup.number().optional().typeError("Informe apenas números"),
  status: yup.bool().required("Condição é obrigatório"),
  obs: yup.string().optional(),
});

const Form = () => {
  const navigate = useNavigate();
  const { user } =useContext(UserContext);
  const { id } = useParams();
  const [sale, setSale] = useState("");
  const [customers, setCustomers] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  const getSale = async () => {
    const { data } = await api.get(`/sales/findById?id=${id}`);
    setSale([]);
    data.map((item) => {
      setSale((prevState) => {
        const findedIndex = prevState?.findIndex((value) => value?.id === item.id);

        if (findedIndex === -1) {
          return [...prevState, {
            id: item.id,
            amount: item.amount,
            offerAmount: item.offerAmount,
            payment: item.payment,
            createdAt: item.createdAt,
            amountPayment: item.amountPayment,
            customerId: item.customerId,
            paymentId: item.paymentId,
            status: item.status,
            obs: item.obs,
            variates: [{
              categoryName: item.categoryName,
              brandName: item.brandName,
              productImage: item.productImage,
              sku: item.sku,
              color: item.color,
              price: item.price,
              product: item.product,
              quantity: item.quantity,
              size: item.size,
              subAmount: item.subAmount,
            }]
          }]
        }

        return prevState.filter((value, i) => i !== findedIndex
          ? value
          : value.variates.push({
            categoryName: item.categoryName,
            brandName: item.brandName,
            productImage: item.productImage,
            sku: item.sku,
            color: item.color,
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            subAmount: item.subAmount,
          }))
      })
    })
  }
  const getCustomers = async () => {
    const { data } = await api.get("/customers/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name }));
    setCustomers(records);
  }
  const getPaymentMethods = async () => {
    const { data } = await api.get("/paymentMethods/findAll");
    const records = data.records.map((item) => ({ value: item.id, label: item.name + ": " + `${item.installments ? item.installments + "x " + (item.fees ? item.fees + "% juros" : "sem juros") : "à vista"}` }));
    setPaymentMethods(records);
  }
  const searchProducts = async () => {
    const { data } = await api.get(`/products/searchSale?search=${search}`);
    setProducts([]);
    data.map((item) => {
      setProducts((prevState) => {
        const findedIndex = prevState?.findIndex((value) => value?.id === item.id);

        if (findedIndex === -1) {
          return [...prevState, {
            id: item.id,
            brand: item.brand,
            category: item.category,
            cover: item.cover,
            name: item.name,
            sku: item.sku,
            variates: [{
              color: item.color,
              discount: item.discount,
              orders: item.orders,
              ordersAmount: item.ordersAmount,
              sale: item.sale,
              size: item.size,
              stock: item.stock,
              variateId: item.variateId
            }]
          }]
        }

        return prevState.filter((value, i) => i !== findedIndex
          ? value
          : value.variates.push({
            color: item.color,
            discount: item.discount,
            orders: item.orders,
            ordersAmount: item.ordersAmount,
            sale: item.sale,
            size: item.size,
            stock: item.stock,
            variateId: item.variateId
          }))
      })
    })
  }
  useEffect(() => {
    if (id) getSale();
    getCustomers();
    getPaymentMethods();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (search !== "") searchProducts();
    else setProducts([]);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps
  const saleInitialValues = {
    customer: sale[0]?.customerId || "",
    paymentMethod: sale[0]?.paymentId || "",
    amountPayment: sale.amountPayment || "",
    status: sale[0]?.status || "",
    obs: sale[0]?.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: saleInitialValues,
    validationSchema: saleSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    if (id) {
      if (sale[0]?.status == 1) return toast.error("Produto já está pago");
      formData.append("id", id);
      api.post("sales/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    } else {
      formData.append("amount", getAmountCart());
      formData.append("offerAmount", getAmoutOffer());
      formData.append("saller", Number(user.id));

      api.post("/sales/save", formData)
        .then(async (res) => {
          if (res.status === 500) return toast.error(res.data.message);
          const productId = Number(res.data.message);

          for (const value of productsCart) {
            let cartFormData = new FormData();
            cartFormData.append("sale", productId);
            cartFormData.append("product", Number(value?.variate?.variateId));
            cartFormData.append("price", value?.variate?.discount || value?.variate?.sale);
            cartFormData.append("quantity", value?.quantity);
            cartFormData.append("offer", value?.offer);
            cartFormData.append("subAmount", value?.subAmount);
            cartFormData.append("subAmountOffer", value?.subAmountOffer);
            cartFormData.append("stock", value?.variate?.stock);
            cartFormData.append("orders", Number(value.variate.orders));
            cartFormData.append("ordersAmount", Number(value.variate.ordersAmount));
            await api.post("/saleProducts/save", cartFormData);
          }
        })

      toast.success("Cadastro realizado com sucesso");
    }

    navigate("/vendas");
  }

  // const getVariates = id =>
  //   variates.filter((item) => item.productId === id);
  const addToCart = (product, variate) =>
    setProductsCart((prevState) => [...prevState, { ...product, variate: variate, quantity: 1, discount: 0, subAmount: variate.discount || variate.sale }]);
  const applyDiscount = (index, value) => {
    if (value > 100) return;
    const product = productsCart.find((_, i) => i === index);
    product.offer = Number(value);
    console.log(productsCart);
  }

  const calculateSubAmount = (index) => {
    const product = productsCart.find((_, i) => i === index);

    const subAmountOffer = product.offer
      ? (product.offer)/100 * (product.variate.discount || product.variate.sale) * product.quantity : 0;
    const subAmount = product.offer
      ? (1 -(product.offer)/100) * product.quantity * (product.variate.discount || product.variate.sale)
      : product.quantity * (product.variate.discount || product.variate.sale);

    product.subAmountOffer = subAmountOffer;
    product.subAmount = subAmount;
    setProductsCart((prevState) => [...prevState]);
  }
  const getAmountCart = () => productsCart.reduce((acc, cur) => acc + cur.subAmount, 0);
  const getAmoutOffer = () => productsCart.reduce((acc, cur) => acc + (cur.subAmountOffer ? cur.subAmountOffer : 0), 0);
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
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/vendas" disabled={sale[0]?.status === 1} />

            <div className="relative flex-auto p-6">
              {
                !id ? (
                  <>
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
                                  <img src={item.cover ? `${import.meta.env.VITE_SERVER_URL}/images/${item.cover}` : "/img/noproduct.png"} alt={item.name} className="bg-white h-9 w-9 rounded-xl" />
                                </div>
                                <div className="flex flex-col">
                                  <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                                  <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white truncate">{item.name}</h6>
                                  <span className="text-xs leading-tight dark:text-white/80 truncate">Categoria: {item.category} | Marca: {item.brand}</span>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                {
                                  item.variates?.map((value, key) => (
                                    <button type="button" onClick={() => addToCart(item, value)} className="flex flex-col gap-2 p-2 border rounded-lg dark:border-white border-slate-700 group dark:hover:bg-gray-200 hover:bg-slate-700" key={key}>
                                      <span className="mb-0 text-xs font-semibold leading-tight dark:text-white group-hover:dark:text-black group-hover:text-white">
                                        <span className="opacity-70">Tamanho:</span>&nbsp;{value.size}
                                      </span>
                                      <span className="mb-0 text-xs font-semibold leading-tight dark:text-white group-hover:dark:text-black group-hover:text-white">
                                        <span className="opacity-70">Cor:</span>&nbsp;{value.color}
                                      </span>
                                      <span className="text-xs leading-tight dark:text-white/80 group-hover:dark:text-black group-hover:text-white truncate">
                                        <i className="mr-1 fas fa-shopping-cart"></i>{value.stock} unids, <span className="font-semibold">{currencyPrice.format(value.discount || value.sale)}</span>
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
                                        <img src={item.cover ? `${import.meta.env.VITE_SERVER_URL}/images/${item.cover}` : "/img/noproduct.png"} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt={item.title} />
                                      </div>
                                      <div className="flex flex-col justify-center">
                                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.sku}</h6>
                                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.name}</p>
                                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Categoria: {item.category} | Marca: {item.brand}</p>
                                        <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Tamanho: {item.variate?.size} | Cor: {item.variate?.color}</p>
                                      </div>
                                    </div>
                                  </td>
                                  <td className={`${i === productsCart.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.variate?.stock} unids</p>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(item.variate?.discount || item.variate?.sale)}</p>
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
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Total de desconto: {productsCart?.length === 0 ? 0 : currencyPrice.format(getAmoutOffer())}</p>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Troco: {formik.values.amountPayment ? currencyPrice.format(formik.values.amountPayment - getAmountCart()) : 0}</p>
                            </td>
                          </tr>
                        </tfoot>
                    </table>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
                  </>
                ) : (
                  <>
                    <ul className="max-h-100 overflow-y-auto w-full list-none dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4">
                      {
                      sale[0]?.variates?.map((item, i) => (
                        <li key={i} className="flex items-center justify-center gap-2 py-2 px-2 mb-2 border-0 rounded-t-lg rounded-xl text-inherit">
                          <div className="flex items-center gap-2">
                            <div>
                              <img src={item.productImage ? `${import.meta.env.VITE_SERVER_URL}/images/${item.productImage}` : "/img/noproduct.png"} alt={item.product} className="bg-white h-9 w-9 rounded-xl" />
                            </div>
                            <div className="flex flex-col">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                              <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white truncate">{item.product}</h6>
                              <span className="text-xs leading-tight dark:text-white/80 truncate">Categoria: {item.categoryName} | Marca: {item.brandName}</span>
                              <span className="text-xs leading-tight dark:text-white/80 truncate">Tamanho: {item.size} | Cor: {item.color}</span>
                              <span className="text-xs leading-tight dark:text-white/80 truncate">Preço: {currencyPrice.format(item.price)} | Quantidade: {item.quantity} | Subtotal: {currencyPrice.format(item.subAmount)}</span>
                            </div>
                          </div>
                        </li>
                      ))
                      }
                    </ul>
                  </>
                )
              }
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="far fa-money-bill-alt"></i>&nbsp;Informações da venda</p>
              <div className="flex flex-wrap py-3">
                {
                  id && (
                  <div className="p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Total à pagar: {currencyPrice.format(sale[0]?.amount)}</p>
                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Total de desconto: {currencyPrice.format(sale[0]?.offerAmount)}</p>
                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Troco: {formik.values.amountPayment ? currencyPrice.format(formik.values.amountPayment - sale[0]?.amount) : 0}</p>
                    {sale[0]?.status == 1 && <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Forma pagamento: {sale[0]?.payment}</p>}
                  </div>
                  )
                }
                
                {
                  !id && (
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                      <div className="mb-4">
                        <SelectField id="customer" label="Cliente" icon="fas fa-user" name="customer" placeholder="Sem cliente" dataList={customers} errors={formik.touched.customer && formik.errors.customer} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.customer} />
                      </div>
                    </div>
                  )
                }

                {
                  !sale[0]?.status == 1 && (
                  <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div className="mb-4">
                      <SelectField id="paymentMethod" label="Forma de pagamento" icon="fas fa-book" name="paymentMethod" placeholder="Sem forma de pagamento" dataList={paymentMethods} errors={formik.touched.paymentMethod && formik.errors.paymentMethod} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.paymentMethod} />
                    </div>
                  </div>
                  )
                }
                
                {
                  formik.values.paymentMethod == 1 && !sale[0]?.status == 1 && (
                  <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div className="mb-4">
                      <TextField id="amountPayment" label="Total pago" icon="fas fa-book" name="amountPayment" placeholder="Total pago" errors={formik.touched.amountPayment && formik.errors.amountPayment} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.amountPayment} />
                    </div>
                  </div>
                  )
                }
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Condição" icon="fas fa-globe" name="status" placeholder="Sem condição" dataList={condition} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" onChange={formik.handleChange} value={formik.values.obs} />
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
