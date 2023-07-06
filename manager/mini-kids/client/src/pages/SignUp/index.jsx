import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { cepMask, cpfMask, mobileMask, phoneMask, rgMask } from "../../utils/calculate";
import Footer from "../../components/Navigation/Footer";

const signUpSchema = yup.object().shape({
  username: yup.string().required("Usuário é obrigatório"),
  email: yup.string().email("Informe um email válido").required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().optional(),
  phone: yup.string().optional(),
  mobile: yup.string().required("Celular é obrigatório"),
  cpf: yup.string().optional(),
  rg: yup.string().optional(),
  birthday: yup.date().optional().typeError("Informe um data válida"),
  profile: yup.number().required("Perfil é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  state: yup.string().required("Estado é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  zipCode: yup.string().required("CEP é obrigatório"),
  number: yup.string().optional(),
  complement: yup.string().optional(),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais').required("Confirma senha é obrigatório"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const signUpInitialValues = {
    username: "",
    email: "",
    name: "",
    lastName: "",
    phone: "",
    mobile: "",
    cpf: "",
    rg: "",
    profile: 1,
    birthday: "",
    address: "",
    city: "",
    state: "",
    neighborhood: "",
    zipCode: "",
    number: "",
    complement: "",
    password: "",
    confirmPassword: "",
    status: 1,
    obs: "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: signUpInitialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => handleSubmit(values)
  })
  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    api.post("/users/save", formData)
      .then((res) => {
        if (res.status === 500 || !res.data) return toast.error("Falha no cadastro");
        toast.success("Cadastro realizado com sucesso");
        navigate("/");
      });
  }

  return (
    <main className="mt-0 transition-all duration-200 ease-in-out dark:bg-slate-900 bg-gray-50 text-slate-500">
      <section className="min-h-screen">
        <div className="bg-top relative flex items-start pt-12 pb-56 mx-4 overflow-hidden bg-cover min-h-50-screen rounded-xl bg-[url('/img/register-bg.jpg')]">
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 opacity-60"></span>
          <div className="container z-10">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 className="mt-12 mb-2 text-white">Bem-vindo!</h1>
                <p className="text-white">Digite seus dados pessoais nos campos abaixo para criar sua conta e acessar a plataforma.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
              <div className="relative z-0 flex flex-col min-w-0 break-words dark:bg-slate-900 bg-gray-50 border-0 shadow-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-6">
                  <form role="form text-left" onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                      <input type="text" id="username" name="username" placeholder="Usuário" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} className="dark:bg-slate-850 focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                      <span className="text-red-500 text-sm">{formik.touched.username && formik.errors.username}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="name" name="name" title="Nome" placeholder="Nome" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.name && formik.errors.name}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="lastName" name="lastName" title="Sobrenome" placeholder="Sobrenome" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.lastName && formik.errors.lastName}</span>
                    </div>
                    <div className="mb-4">
                      <input type="email" id="email" name="email" title="Email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.email && formik.errors.email}</span>
                    </div>
                    <div className="mb-4">
                      <input type="tel" id="phone" name="phone" title="Telefone" placeholder="Telefone" onChange={(e) => formik.setFieldValue("phone", phoneMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.phone} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.phone && formik.errors.phone}</span>
                    </div>
                    <div className="mb-4">
                      <input type="tel" id="mobile" name="mobile" title="Celular" placeholder="Celular" maxLength={15} onChange={(e) => formik.setFieldValue("mobile", mobileMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.mobile} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.mobile && formik.errors.mobile}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="cpf" name="cpf" title="CPF" placeholder="CPF" onChange={(e) => formik.setFieldValue("cpf", cpfMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.cpf} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.cpf && formik.errors.cpf}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="rg" name="rg" title="RG" placeholder="RG" onChange={(e) => formik.setFieldValue("rg", rgMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.rg} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.rg && formik.errors.rg}</span>
                    </div>
                    <div className="mb-4">
                      <input type="date" id="birthday" name="birthday" title="Nascimento" placeholder="Nascimento" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthday} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.birthday && formik.errors.birthday}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="address" name="address" title="Endereço" placeholder="Endereço" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.address && formik.errors.address}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="city" name="city" title="Cidade" placeholder="Cidade" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.city && formik.errors.city}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="state" name="state" title="Estado" placeholder="Estado" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.state && formik.errors.state}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="neighborhood" name="neighborhood" title="Bairro" placeholder="Bairro" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.neighborhood} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.neighborhood && formik.errors.neighborhood}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="zipCode" name="zipCode" title="CEP" placeholder="CEP" onChange={(e) => formik.setFieldValue("zipCode", cepMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.zipCode} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.zipCode && formik.errors.zipCode}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="number" name="number" title="Número" placeholder="Número" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.number && formik.errors.number}</span>
                    </div>
                    <div className="mb-4">
                      <input type="text" id="complement" name="complement" title="Complemento" placeholder="Complemento" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.complement} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.complement && formik.errors.complement}</span>
                    </div>
                    <div className="mb-4">
                      <input type="password" id="password" name="password" title="Senha" placeholder="Senha" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.password && formik.errors.password}</span>
                    </div>
                    <div className="mb-4">
                      <input type="password" id="confirmPassword" name="confirmPassword" title="Repetir senha" placeholder="Repetir senha" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} className="dark:bg-slate-850 placeholder:text-gray-500 text-sm focus:shadow-primary-outline leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" />
                      <span className="text-red-500 text-sm">{formik.touched.confirmPassword && formik.errors.confirmPassword}</span>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="inline-block w-full px-5 py-2.5 mt-6 mb-2 font-bold text-center text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:-translate-y-px hover:shadow-xs leading-normal text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Cadastrar</button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-sm">Já possui uma conta? <a href="/" className="font-bold text-slate-700">Fazer login</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SignUp;
