/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";

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
});

const FormProfile = ({ initialData, loading, setLoading, toastMessage, action }) => {
  const initialValues = initialData;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    console.log(values);
    console.log(toastMessage);
    try {
      setLoading(true);
      // await axios.put(`/api/v1/${params.storeId}/customers/${params.productId}`, values);
      // navigate(0);
      // navigate(`/${params.storeId}/clientes`);
      // toast.success(toastMessage);
    } catch (error) {
      console.log(error);
      // toast.error("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-8 w-full" onSubmit={formik.handleSubmit}>
      <div className="md:grid md:grid-cols-3 flex flex-col gap-8">
        <Input id="name" label="Nome" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} disabled={loading} />
        <Input id="email" label="Email" title="Email" name="email" placeholder="Informe o email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled={true} />
        <Input id="mobile" label="Celular" title="Celular" name="mobile" placeholder="Informe o celular" errors={formik.touched.mobile && formik.errors.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} disabled={loading} />
        <Input id="street" label="Rua" title="Rua" name="address.street" placeholder="Informe a rua" errors={formik.touched?.address?.street && formik.errors?.address?.street} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.street} disabled={loading} />
        <Input id="neighborhood" label="Bairro" title="Bairro" name="address.neighborhood" placeholder="Informe o bairro" errors={formik.touched?.address?.neighborhood && formik.errors?.address?.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.neighborhood} disabled={loading} />
        <Input id="city" label="Cidade" title="Cidade" name="address.city" placeholder="Informe o cidade" errors={formik.touched?.address?.city && formik.errors?.address?.city} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.city} disabled={loading} />
        <Input id="state" label="Estado" title="Estado" name="address.state" placeholder="Informe o estado" errors={formik.touched?.address?.state && formik.errors?.address?.state} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.state} disabled={loading} />
        <Input id="number" label="Número" title="Número" name="address.number" placeholder="Informe o número" errors={formik.touched?.address?.number && formik.errors?.address?.number} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.number} disabled={loading} />
        <Input id="zipCode" label="CEP" title="CEP" name="address.zipCode" placeholder="Informe o CEP" errors={formik.touched?.address?.zipCode && formik.errors?.address?.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.zipCode} disabled={loading} />
        <Input id="complement" label="Complemento" title="Complemento" name="address.complement" placeholder="Informe o complemento" errors={formik.touched?.address?.complement && formik.errors?.address?.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.complement} disabled={loading} />
      </div>
      <Button type="submit" className="bg-slate-900 dark:bg-slate-600 text-white">{action}</Button>
    </form>
  );
};

export default FormProfile;
