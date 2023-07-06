/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/components/ui/inputs/input";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
});

const validationPasswordSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  newPassword: yup.string().required("Senha nova é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Senhas devem ser iguais').required("Confirma senha nova é obrigatório"),
  token: yup.string().required("Token é obrigatório"),
});

const FormRecoveryPassword = ({ loading, setLoading, toastMessage, action, isResetPassword, token }) => {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = { store: params.storeId, email: "" };
  const initialPasswordValues = { store: params.storeId, email: "", newPassword: "", confirmPassword: "", token: token };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: !isResetPassword ? initialValues : initialPasswordValues,
    validationSchema: !isResetPassword ? validationSchema : validationPasswordSchema,
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
        {!isResetPassword
          ? (
            <Input id="email" label="Email" title="Email" name="email" placeholder="Informe seu email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled={loading} />
          ) : (
            <>
              <Input id="newPassword" label="Nova senha" title="Nova senha" type="password" name="newPassword" placeholder="Informe a senha nova" errors={formik.touched.newPassword && formik.errors.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newPassword} disabled={loading} />
              <Input id="confirmPassword" label="Confirmar senha" title="Confirmar senha" type="password" name="confirmPassword" placeholder="Confirme a senha nova" errors={formik.touched.confirmPassword && formik.errors.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} disabled={loading} />
            </>
          )
        }
      </div>
      <Button type="submit" className="bg-slate-900 dark:bg-slate-600 text-white" onClick={() => navigate(`?token=123`)}>{action}</Button>
      {!isResetPassword && (
        <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
          <p className="mx-auto mb-6 leading-normal text-sm">Lembrou sua senha?
            <Link to={`/${params.storeId}/login`} className="ml-2 font-semibold text-gray-600 dark:text-gray-200">Fazer login</Link>
          </p>
        </div>
      )}
    </form>
  );
};

export default FormRecoveryPassword;
