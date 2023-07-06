/* eslint-disable react/prop-types */
import { useFormik } from "formik";
// import { useParams } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

import { paymentEnum } from "@/types/order";
import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/inputs/checkbox";

// import { paymentEnum } from "@/utils";
// import Input from "@/components/ui/input";
// import Button from "@/components/ui/button";
// import Checkbox from "@/components/ui/checkbox";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  mobile: yup.string().required("Número é obrigatório"),
  address: yup.object({
    street: yup.string().required("Rua é obrigatório"),
    neighborhood: yup.string().required("Bairro é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    state: yup.string().required("Estado é obrigatório"),
    number: yup.string().optional(),
    zipCode: yup.string().required("CEP é obrigatório"),
    complement: yup.string().optional(),
  }).required("Endereço é orbigatório"),
  settings: yup.object({
    payment: yup.array(
      yup.string().required("Tipo de pagamento é obrigatório"),
    ).required("Método de pagamento é obrigatório"),
    // opening: yup.bool().required("Funcionamento é obrigatório"),
    shipping: yup.array(
      yup.object({
        method: yup.string().required("Método de entrega é obrigatório"),
        neighborhood: yup.string(),
        price: yup.number().typeError("Informe apenas números"),
        deadlineAt: yup.number().typeError("Informe apenas números"),
      }),
    ).required("Taxa de entrega é obrigatório"),
  }).required("Configurações é obrigatório"),
});

const FormSettings = ({ initialData, loading, setLoading, toastMessage, action }) => {
  // const params = useParams();
  const initialValues = initialData;
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
      // await axios.put(`/api/v1/${params.storeId}/customers/${params.productId}`, values);
      // navigate(0);
      // navigate(`/${params.storeId}/clientes`);
      toast.success(toastMessage);
    } catch (error) {
      console.log(error);
      toast.error("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-8 w-full" onSubmit={formik.handleSubmit}>
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          <label className="text-sm text-slate-400 font-semibold">Formas de pagamento</label>
          {paymentEnum?.map((item, i) => (
            <Checkbox key={i} value={item.value}>{item.label}</Checkbox>
          ))
          }
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-sm text-slate-400 font-semibold">Formas de entrega</label>
          <Input name="method" placeholder="Informe o método" disabled={loading} />
          <Input name="neighborhood" placeholder="Informe o bairro" disabled={loading} />
          <Input name="price" placeholder="Informe a taxa" disabled={loading} />
          <Input name="deadlineAt" placeholder="Informe o tempo de entrega (minutos)" disabled={loading} />
          <Button type="button" className="dark:text-slate-700 bg-slate-900 text-white dark:bg-white">Adicionar</Button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-8">
      <Input id="name" label="Nome" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} disabled={loading} />
        <Input id="email" label="Email" title="Email" name="email" placeholder="Informe o email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled={loading} />
        <Input id="mobile" label="Celular" title="Celular" name="mobile" placeholder="Informe o celular" errors={formik.touched.mobile && formik.errors.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} disabled={loading} />
        <Input id="street" label="Rua" title="Rua" name="address.street" placeholder="Informe a rua" errors={formik.touched?.address?.street && formik.errors?.address?.street} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.street} disabled={loading} />
        <Input id="neighborhood" label="Bairro" title="Bairro" name="address.neighborhood" placeholder="Informe o bairro" errors={formik.touched?.address?.neighborhood && formik.errors?.address?.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.neighborhood} disabled={loading} />
        <Input id="city" label="Cidade" title="Cidade" name="address.city" placeholder="Informe o cidade" errors={formik.touched?.address?.city && formik.errors?.address?.city} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.city} disabled={loading} />
        <Input id="state" label="Estado" title="Estado" name="address.state" placeholder="Informe o estado" errors={formik.touched?.address?.state && formik.errors?.address?.state} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.state} disabled={loading} />
        <Input id="number" label="Número" title="Número" name="address.number" placeholder="Informe o número" errors={formik.touched?.address?.number && formik.errors?.address?.number} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.number} disabled={loading} />
        <Input id="zipCode" label="CEP" title="CEP" name="address.zipCode" placeholder="Informe o CEP" errors={formik.touched?.address?.zipCode && formik.errors?.address?.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.zipCode} disabled={loading} />
        <Input id="complement" label="Complemento" title="Complemento" name="address.complement" placeholder="Informe o complemento" errors={formik.touched?.address?.complement && formik.errors?.address?.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.complement} disabled={loading} />
      </div>
      <Button type="submit" className="dark:text-slate-700 bg-slate-900 text-white dark:bg-white">{action}</Button>
    </form>
  )
};

export default FormSettings;
