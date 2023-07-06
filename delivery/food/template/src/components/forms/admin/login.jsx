/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const FormLogin = ({ loading, setLoading, toastMessage, action }) => {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = { store: params.storeId, email: "", password: "" };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    console.log(values);
    console.log(toastMessage);
    setLoading(true);
  }
  return (
    <form className="space-y-8 w-full" onSubmit={formik.handleSubmit}>
      <div className="md:grid md:grid-cols-3 flex flex-col gap-8">
        <Input id="email" label="Email" title="Email" name="email" placeholder="Informe seu email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled={loading} />
        <Input id="password" label="Senha" title="Senha" type="password" name="password" placeholder="Informe sua senha" errors={formik.touched.password && formik.errors.password} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} disabled={loading} />
      </div>
      <Button type="submit" className="bg-slate-900 dark:bg-slate-600 text-white" onClick={() => navigate(`painel`)}>{action}</Button>
      <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
        <p className="mx-auto mb-6 leading-normal text-sm">Esqueceu sua senha?
          <Link to="recuperar-senha" className="ml-2 font-semibold text-gray-600 dark:text-gray-200">Recuperar senha</Link>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
