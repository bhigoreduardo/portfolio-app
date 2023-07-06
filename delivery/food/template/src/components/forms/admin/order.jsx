/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "@/libs/api";
import { customer } from "@/utils/data";
import { neighborhood } from "@/utils/data";
import { shippingEnum, paymentEnum } from "@/types/order";
import { ProdutListModal } from "@/components/ui/modals/modal-product-list";
import Select from "@/components/ui/inputs/select";
import Input from "@/components/ui/inputs/input";
import Textarea from "@/components/ui/inputs/textarea";
import Button from "@/components/ui/button";

const customers = new Array(4).fill(customer).map(({ _id, name }) => ({ value: _id, label: name }));
const neighborhoods = new Array(3).fill(neighborhood);

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  customer: yup.string().required("Cliente é obrigatório"),
  cart: yup.array(
    yup.object({
      product: yup.string().required("Produto é obrigatório"),
      quantity: yup.number().required("Quantity é obrigatório").typeError("Informe apenas número"),
    }),
  ).required("Carrinho é obrigatório"),
  shipping: yup.object({
    method: yup.string().required("Método de entrega é obrigatório"),
    neighborhood: yup.string().required("Bairro é obrigatório"),
  }),
  payment: yup.object({
    method: yup.string().required("Método de pagamento é obrigatório"),
    moneyChange: yup.number().optional().typeError("Informe apenas número"),
  }),
  payload: yup.string().optional(),
});

const FormOrder = ({ loading, setLoading, toastMessage, action }) => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const initialValues = {
    store: params.storeId, customer: "", cart: [], shipping: {
      method: "", neighborhood: "",
    }, payment: {
      method: "", moneyChange: "",
    }, payload: "",
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    console.log(values);
    try {
      setLoading(true);
      // await axios.put(`/api/v1/${params.storeId}/categories/${params.categoryId}`, values);
      // navigate(0);
      // navigate(`/${params.storeId}/categorias`);
      toast.success(toastMessage);
    } catch (error) {
      console.log(error);
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  }
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    const { data } = await api.get(`/products`);
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProdutListModal isOpen={open}  onClose={() => setOpen(false)} products={products} />
      <form className="space-y-8 w-full" onSubmit={formik.handleSubmit}>
        <div className="md:grid md:grid-cols-3 flex-col gap-8 mb-8">
          <Select id="customer" label="Cliente" title="Cliente" name="customer" placeholder="Sem cliente" data={customers} errors={formik.touched.customer && formik.errors.customer} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.customer} disabled={loading} />
          <Select id="shipping" label="Entrega" title="Entrega" name="shipping.method" placeholder="Sem entrega" data={shippingEnum} errors={formik.touched?.shipping?.method && formik.errors?.shipping?.method} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.shipping?.method} disabled={loading} />
          <Select id="neighborhood" label="Bairro" title="Bairro" name="shipping.neighborhood" placeholder="Sem bairro" data={neighborhoods} errors={formik.touched?.shipping?.neighborhood && formik.errors?.shipping?.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.shipping?.neighborhood} disabled={loading} />
          <Select id="payment" label="Pagamento" title="Pagamento" name="payment.method" placeholder="Sem pagamento" data={paymentEnum} errors={formik.touched?.payment?.method && formik.errors?.payment?.method} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.payment?.method} disabled={loading} />
          <Input id="moneyChange" label="Troco" title="Troco" name="payment.moneyChange" placeholder="Informe o troco" errors={formik.touched?.payment?.moneyChange && formik.errors?.payment?.moneyChange} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.payment?.moneyChange} disabled={loading} />
        </div>
        <Textarea id="payload" label="Observação" title="Observação" name="payload" placeholder="Informe a observação" errors={formik.touched.payload && formik.errors.payload} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.payload} disabled={loading} />
        <Button type="button" onClick={() => setOpen(true)} className="text-slate-700 bg-white mr-8"><i className="	fas fa-cart-plus mr-2"></i>Adicionar produto</Button>
        <Button type="submit" className="text-slate-700 bg-white">{action}</Button>
      </form>
    </>
  );
};

export default FormOrder;
