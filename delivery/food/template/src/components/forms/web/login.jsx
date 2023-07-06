/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "@/components/ui/inputs/input";
import Checkbox from "@/components/ui/inputs/checkbox";
import Button from "@/components/ui/button";

const validationSchema = yup.object().shape({
  store: yup.string().required("Loja é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const signUpValidationSchema = validationSchema.shape({
  name: yup.string().required("Nome é obrigatório"),
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
  terms: yup.bool().required("Termos é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais').required("Confirma senha é obrigatório"),
})

const FormLogin = ({ loading, setLoading, toastMessage, action, isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const params = useParams();
  const initialValues = { store: params.storeId, email: "", password: "" };
  const signUpInitialValues = { name: "", mobile: "", address: {
    street: "", neighborhood: "", city: "", state: "", number: "", zipCode: "", complement: ""
  }, terms: "", confirmPassword: "" }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: isLogin ? initialValues : { ...initialValues, ...signUpInitialValues },
    validationSchema: isLogin ? validationSchema : signUpValidationSchema,
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
        {!isLogin && (
          <Input id="name" label="Nome" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} disabled={loading} />
        )}
        <Input id="email" label="Email" title="Email" name="email" placeholder="Informe seu email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} disabled={loading} />
        {!isLogin && (
          <>
          <Input id="mobile" label="Celular" title="Celular" name="mobile" placeholder="Informe seu celular" errors={formik.touched.mobile && formik.errors.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} disabled={loading} />
          <Input id="street" label="Rua" title="Rua" name="address.street" placeholder="Informe a rua" errors={formik.touched?.address?.street && formik.errors?.address?.street} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.street} disabled={loading} />
          <Input id="neighborhood" label="Bairro" title="Bairro" name="address.neighborhood" placeholder="Informe o bairro" errors={formik.touched?.address?.neighborhood && formik.errors?.address?.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.neighborhood} disabled={loading} />
          <Input id="city" label="Cidade" title="Cidade" name="address.city" placeholder="Informe o cidade" errors={formik.touched?.address?.city && formik.errors?.address?.city} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.city} disabled={loading} />
          <Input id="state" label="Estado" title="Estado" name="address.state" placeholder="Informe o estado" errors={formik.touched?.address?.state && formik.errors?.address?.state} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.state} disabled={loading} />
          <Input id="number" label="Número" title="Número" name="address.number" placeholder="Informe o número" errors={formik.touched?.address?.number && formik.errors?.address?.number} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.number} disabled={loading} />
          <Input id="zipCode" label="CEP" title="CEP" name="address.zipCode" placeholder="Informe o CEP" errors={formik.touched?.address?.zipCode && formik.errors?.address?.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.zipCode} disabled={loading} />
          <Input id="complement" label="Complemento" title="Complemento" name="address.complement" placeholder="Informe o complemento" errors={formik.touched?.address?.complement && formik.errors?.address?.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.address?.complement} disabled={loading} />
          </>
        )}
        <Input id="password" label="Senha" title="Senha" type="password" name="password" placeholder="Informe sua senha" errors={formik.touched.password && formik.errors.password} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} disabled={loading} />
        {!isLogin && (
          <>
            <Input id="confirmPassword" label="Confirmar senha" title="Confirmar senha" type="password" name="confirmPassword" placeholder="Confirme a senha" errors={formik.touched.confirmPassword && formik.errors.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} disabled={loading} />
            <Checkbox name="terms" errors={formik.touched.terms && formik.errors.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.terms} disabled={loading}>
              <p>Aceito os <Link to="termos" className="font-semibold text-[#8e2de2] dark:text-white">termos</Link></p>
            </Checkbox>
          </>
        )}
      </div>
      <Button type="submit" className="bg-slate-900 dark:bg-slate-600 text-white" onClick={() => navigate(`/${params.storeId}/perfil`)}>{action}</Button>
      <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
        <p className="mx-auto mb-6 leading-normal text-sm">
          {isLogin ? "Não possui uma conta?" : "Já possui uma conta?"}
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="ml-2 font-semibold text-[#8e2de2] dark:text-gray-200">
            {isLogin ? "Cadastre-se" : "Fazer login"}
          </button>
        </p>
        <p className="mx-auto mb-6 leading-normal text-sm">Esqueceu sua senha?
          <Link to={`/${params.storeId}/recuperar-senha`} className="ml-2 font-semibold text-gray-600 dark:text-gray-200">Recuperar senha</Link>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
