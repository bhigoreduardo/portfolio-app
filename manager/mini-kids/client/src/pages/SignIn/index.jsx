import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { UserContext } from "../../contexts/UserContext";
import Footer from "../../components/Navigation/Footer";

const loginSchema = yup.object().shape({
  username: yup.string().required("Usuário é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  remember: yup.bool().optional(),
});

const SignIn = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const loginInitialValues = {
    username: "",
    password: "",
    remember: false,
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => handleSubmit(values)
  })
  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    api.post("/auth/login", formData)
      .then((res) => {
        if (res.status === 500 || !res.data) return toast.error("Falha no login");
        toast.success("Login realizado com sucesso");
        setUser({ ...res.data, remember: values.remember });
        navigate("/painel");
      });
  }

  if (user) navigate("/painel");

  return (
    <main className="mt-0 transition-all duration-200 ease-in-out dark:bg-slate-900 bg-gray-50 text-slate-500">
      <section>
        <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
          <div className="container z-1">
            <div className="flex flex-wrap -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-gray-950 rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0">
                    <h4 className="font-bold">Login</h4>
                    <p className="mb-0">Digite seu email e senha para fazer login</p>
                  </div>
                  <div className="flex-auto p-6">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-4">
                        <input type="text" id="username" name="username" placeholder="Usuário" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} className="dark:bg-slate-850 focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                        <span className="text-red-500 text-sm">{formik.touched.username && formik.errors.username}</span>
                      </div>
                      <div className="mb-4">
                        <input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder="Senha" className="dark:bg-slate-850 focus:shadow-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                        <span className="text-red-500 text-sm">{formik.touched.password && formik.errors.password}</span>
                      </div>
                      <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
                        <input id="remember" name="remember" onChange={formik.handleChange} value={formik.values.remember} className="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" />
                        <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700" htmlFor="remember">Lembrar me</label>
                      </div>
                      <div className="text-center">
                        {/* <button onClick={() => navigate("/painel")} type="button" className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25">Login</button> */}
                        <button type="submit" className="inline-block w-full px-16 py-3.5 mt-6 mb-0 font-bold leading-normal text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25">Login</button>
                      </div>
                    </form>
                  </div>
                  <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6">
                    <p className="mx-auto mb-6 leading-normal text-sm">Não possui uma conta?<a href="/cadastro" className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500">Cadastre-se</a></p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex">
                <div className="relative flex flex-col justify-center h-full bg-cover px-24 m-4 overflow-hidden bg-[url('/img/login-bg.jpg')] rounded-xl ">
                  <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-500 to-violet-500 opacity-60"></span>
                  <h4 className="z-20 mt-12 font-bold text-white"><q>Dalai Lama</q></h4>
                  <p className="z-20 text-white ">Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.</p>
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

export default SignIn;
