/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

import { status } from "@/types/common";
import Input from "@/components/ui/inputs/input";
import Select from "@/components/ui/inputs/select";
import Checkbox from "@/components/ui/inputs/checkbox";
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
  status: yup.bool().required("Status é obrigatório"),
});

const validationPasswordSchema = validationSchema.shape({
  terms: yup.bool().required("Termos é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais').required("Confirma senha é obrigatório"),
})

const FormCustomer = ({ id, initialData, loading, setLoading, toastMessage, action }) => {
  const params = useParams();
  const initialValues = initialData || {
    store: params.storeId, name: "", email: "", mobile: "", status: "", address: {
      street: "", neighborhood: "", city: "", state: "", number: "", zipCode: "", complement: ""
    },
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: id ? initialValues : {...initialValues, terms: "", password: "", confirmPassword: "" },
    validationSchema: id ? validationSchema : validationPasswordSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    console.log(values);
    try {
      setLoading(true);
      if (id) {
        // await axios.put(`/api/v1/${params.storeId}/customers/${params.productId}`, values);
      } else {
        // await axios.post(`/api/v1/${params.storeId}/auth`, data);
      }
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
        <Select id="status" label="Status" title="Status" name="status" placeholder="Sem status" data={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
        {!id && (
          <>
            <Input id="password" label="Senha" title="Senha" type="password" name="password" placeholder="Informe a senha" errors={formik.touched.password && formik.errors.password} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} disabled={loading} />
            <Input id="confirmPassword" label="Confirmar senha" title="Confirmar senha" type="password" name="confirmPassword" placeholder="Confirme a senha" errors={formik.touched.confirmPassword && formik.errors.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} disabled={loading} />
            <Checkbox name="terms" errors={formik.touched.terms && formik.errors.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.terms} disabled={loading}>
              <p className="dark:text-white">Aceito os <Link to="termos" className="font-semibold text-[#8e2de2] dark:text-white">termos</Link></p>
            </Checkbox>
          </>
        )}
      </div>
      <Button type="submit" className="dark:text-slate-700 bg-slate-900 text-white dark:bg-white">{action}</Button>
    </form>
  )
};

export default FormCustomer;
