/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";

import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  currentPassword: yup.string().required("Senha atual é obrigatório"),
  newPassword: yup.string().required("Senha nova é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Senhas devem ser iguais').required("Confirma senha nova é obrigatório"),
});

const FormPassword = ({ loading, setLoading, toastMessage, action }) => {
  const params = useParams();
  const initialValues = { store: params.storeId, currentPassword: "", newPassword: "", confirmPassword: "" };
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
      console.log(toastMessage);
      // await axios.put(`/api/v1/${params.storeId}/customers/${params.productId}`, values);
      // navigate(0);
      // navigate(`/${params.storeId}/clientes`);
      toast.success(toastMessage);
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
        <Input id="currentPassword" label="Senha atual" title="Senha atual" type="password" name="currentPassword" placeholder="Informe a senha atual" errors={formik.touched.currentPassword && formik.errors.currentPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.currentPassword} disabled={loading} />
        <Input id="newPassword" label="Nova senha" title="Nova senha" type="password" name="newPassword" placeholder="Informe a senha nova" errors={formik.touched.newPassword && formik.errors.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newPassword} disabled={loading} />
        <Input id="confirmPassword" label="Confirmar senha" title="Confirmar senha" type="password" name="confirmPassword" placeholder="Confirme a senha nova" errors={formik.touched.confirmPassword && formik.errors.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} disabled={loading} />
      </div>
      <Button type="submit" className="bg-slate-900 dark:bg-slate-600 text-white">{action}</Button>
    </form>
  );
};

export default FormPassword;
