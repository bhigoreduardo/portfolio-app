import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { status, profiles } from "../../utils";
import { cepMask, cpfMask, mobileMask, phoneMask, rgMask } from "../../utils/calculate";
import AreaField from "../../components/Inputs/AreaField";
import DateField from "../../components/Inputs/DateField";
import SelectField from "../../components/Inputs/SelectField";
import TextField from "../../components/Inputs/TextField";
import PassField from "../../components/Inputs/PassField";
import Layout from "../../components/Layout";
import FormTitle from "../../components/Navigation/FormTitle";

const userSchema = yup.object().shape({
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
  image: yup.string().optional(),
  address: yup.string().required("Endereço é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  state: yup.string().required("Estado é obrigatório"),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  zipCode: yup.string().required("CEP é obrigatório"),
  number: yup.string().optional(),
  complement: yup.string().optional(),
  status: yup.bool().required("Status é obrigatório"),
  obs: yup.string().optional(),
});

const passwordSchema = userSchema.shape({
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais').required("Confirma senha é obrigatório"),
});

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState("");

  const getUser = async () => {
    const { data } = await api.get(`/users/findById?id=${id}`);
    setUser(data);
  }
  useEffect(() => {
    if (id) getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const userInitialValues = {
    username: user.username || "",
    email: user.email || "",
    name: user.name || "",
    lastName: user.lastName || "",
    phone: user.phone || "",
    mobile: user.mobile || "",
    cpf: user.cpf || "",
    rg: user.rg || "",
    birthday: user.birthday || "",
    profile: user.profile || "",
    image: user.image || "",
    password: "",
    confirmPassword: "",
    address: user.address || "",
    city: user.city || "",
    state: user.state || "",
    neighborhood: user.neighborhood || "",
    zipCode: user.zipCode || "",
    number: user.number || "",
    complement: user.complement || "",
    status: user.status || "",
    obs: user.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: userInitialValues,
    validationSchema: id ? userSchema : passwordSchema,
    onSubmit: (values) => handleSubmit(values)
  });
  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    if (id) {
      formData.append('id', id);
      api.post("users/updateById", formData)
        .then((res) => {
          console.log(res);
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }
    else {
      api.post("/users/save", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }

    navigate("/usuarios");
  }

  // const [image, setImage] = useState("");

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/usuarios" />
            
            <div className="flex-auto p-6">
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="username" label="Usuário" icon="fas fa-user" title="Usuário" name="username" placeholder="Informe o usuário" errors={formik.touched.username && formik.errors.username} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="email" label="Email" icon="fas fa-envelope" title="Email" name="email" placeholder="Informe o email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label="Nome" icon="fas fa-user" title="Nome" name="name" placeholder="Informe o nome" errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="lastName" label="Sobrenome" icon="fas fa-user" title="Sobrenome" name="lastName" placeholder="Informe o sobrenome" errors={formik.touched.lastName && formik.errors.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="phone" label="Telefone" icon="fas fa-phone" title="Telefone" name="phone" placeholder="Informe o telefone" errors={formik.touched.phone && formik.errors.phone} onChange={(e) => formik.setFieldValue("phone", phoneMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.phone} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="mobile" label="Celular" icon="fas fa-mobile-alt" title="Celular" name="mobile" placeholder="Informe o celular" errors={formik.touched.mobile && formik.errors.mobile} maxLength={15} onChange={(e) => formik.setFieldValue("mobile", mobileMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.mobile} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="cpf" label="CPF" icon="fas fa-file" title="CPF" name="cpf" placeholder="Informe o CPF" errors={formik.touched.cpf && formik.errors.cpf} onChange={(e) => formik.setFieldValue("cpf", cpfMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.cpf} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="rg" label="RG" icon="fas fa-file-invoice" title="RG" name="rg" placeholder="Informe o RG" errors={formik.touched.rg && formik.errors.rg} onChange={(e) => formik.setFieldValue("rg", rgMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.rg} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <DateField id="birthday" label="Nascimento" icon="fas fa-calendar-alt" title="Nascimento" name="birthday" errors={formik.touched.birthday && formik.errors.birthday} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthday} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <SelectField id="profile" label="Perfil" icon="fas fa-user-check" name="profile" placeholder="Sem perfil" dataList={profiles} errors={formik.touched.profile && formik.errors.profile} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.profile} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-image"></i>&nbsp;Foto do usuário</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <label htmlFor="thumbnail" className="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80">Foto</label>
                  <div className="flex items-center gap-2">
                    <label className="w-24 h-24 dark:bg-slate-850 dark:text-white border border-gray-300 bg-white text-slate-700 flex items-center justify-center gap-1 rounded-lg cursor-pointer text-sm font-semibold">
                      <i className="fa fa-image"></i>&nbsp;Foto
                      <input type="file" onChange={(e) => formik.setFieldValue("image", e.target.files[0])} className="hidden" />
                    </label>
                    <div className="relative w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                      {!formik.values.image ? "Sem foto" : (
                        <>
                          <i onClick={() => formik.setFieldValue("image", "")} className="absolute top-0 right-0 fa fa-times text-white bg-red-500 text-xs py-1 px-2 rounded-lg cursor-pointer"></i>
                          <img src={`${!id ? window.URL.createObjectURL(formik.values.image) : import.meta.env.VITE_SERVER_URL+"/images/"+formik.values.image}`} className="object-cover"/>
                          {/* <img src={window.URL.createObjectURL(formik.values.image)} className="object-cover"/> */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              {
                !id && (
                  <>
                    <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-lock"></i>&nbsp;Informação de segurança</p>
                    <div className="flex flex-wrap py-3">
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                        <PassField id="password" label="Senha" icon="fas fa-link" title="Senha" name="password" placeholder="Informe a senha" errors={formik.touched.password && formik.errors.password} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                        <PassField id="confirmPassword" label="Confirmar senha" icon="fas fa-shield-alt" title="Confirmar senha" name="confirmPassword" placeholder="Repita a senha" errors={formik.touched.confirmPassword && formik.errors.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                      </div>
                    </div>
                    <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
                  </>
                )
              }

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0 mb-3">
                  <TextField id="address" label="Endereço" icon="fas fa-address-book" title="Endereço" name="address" placeholder="Informe o endereço" errors={formik.touched.address && formik.errors.address} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="city" label="Cidade" icon="fas fa-city" title="Cidade" name="city" placeholder="Informe a cidade" errors={formik.touched.city && formik.errors.city} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="state" label="Estado" icon="fas fa-check-double" title="Estado" name="state" placeholder="Informe o estado" errors={formik.touched.state && formik.errors.state} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="neighborhood" label="Bairro" icon="fas fa-home" title="Bairro" name="neighborhood" placeholder="Informe o bairro" errors={formik.touched.neighborhood && formik.errors.neighborhood} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.neighborhood} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="zipCode" label="CEP" icon="fas fa-qrcode" title="CEP" name="zipCode" placeholder="Informe o CEP" errors={formik.touched.zipCode && formik.errors.zipCode} onChange={(e) => formik.setFieldValue("zipCode", cepMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.zipCode} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="number" label="Número" icon="fas fa-sort-numeric-up" title="Número" name="number" placeholder="Informe o número" errors={formik.touched.number && formik.errors.number} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <TextField id="complement" label="Complemento" icon="fas fa-sort-amount-up" title="Complemento" name="complement" placeholder="Informe o complemento" errors={formik.touched.complement && formik.errors.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.complement} />
                </div>
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-tools"></i>&nbsp;Alterações</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0 mb-3">
                  <SelectField id="status" label="Status" icon="fas fa-globe" name="status" placeholder="Sem status" dataList={status} errors={formik.touched.status && formik.errors.status} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.status} />
                </div>

                <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                  <AreaField id="obs" label="Observação" icon="fas fa-align-center" title="Observação" name="obs" placeholder="Informe a observação" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.obs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Form;
