import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import api from "../../libs/api";
import { status } from "../../utils";
import { cepMask, cnpjMask, cpfMask, ieMask, mobileMask, phoneMask, rgMask } from "../../utils/calculate";
import Layout from "../../components/Layout";
import Checkbox from "../../components/Inputs/Checkbox";
import FormTitle from "../../components/Navigation/FormTitle";
import TextField from "../../components/Inputs/TextField";
import DateField from "../../components/Inputs/DateField";
import SelectField from "../../components/Inputs/SelectField";
import AreaField from "../../components/Inputs/AreaField";

const supplySchema = yup.object().shape({
  personType: yup.number().required("Tipo é obrigatório"),
  email: yup.string().email("Informe um email válido").required("Email é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  lastName: yup.string().optional(),
  phone: yup.string().optional(),
  mobile: yup.string().required("Celular é obrigatório"),
  cpfCnpj: yup.string().optional(),
  rgIe: yup.string().optional(),
  birthday: yup.date().optional().typeError("Informe um data válida"),
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

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [supply, setSupply] = useState("");

  const getSupply = async () => {
    const { data } = await api.get(`/supplies/findById?id=${id}`);
    setSupply(data);
  }
  useEffect(() => {
    if (id) getSupply();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const supplyInitialValues = {
    personType: supply.personType || 1,
    email: supply.email || "",
    name: supply.name || "",
    lastName: supply.lastName || "",
    phone: supply.phone || "",
    mobile: supply.mobile || "",
    cpfCnpj: supply.cpfCnpj || "",
    rgIe: supply.rgIe || "",
    birthday: supply.birthday || "",
    image: supply.image || "",
    address: supply.address || "",
    city: supply.city || "",
    state: supply.state || "",
    neighborhood: supply.neighborhood || "",
    zipCode: supply.zipCode || "",
    number: supply.number || "",
    complement: supply.complement || "",
    status: supply.status || "",
    obs: supply.obs || "",
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: supplyInitialValues,
    validationSchema: supplySchema,
    onSubmit: (values) => handleSubmit(values)
  });

  const handleSubmit = async values => {
    const formData = new FormData();
    for (const value in values) {
      formData.append(value, values[value]);
    }

    if (id) {
      formData.append('id', id);
      api.post("supplies/updateById", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }
    else {
      api.post("/supplies/save", formData)
        .then((res) => {
          if (res.status === 500) return toast.error(res.data.message);
          toast.success(res.data.message);
        })
    }

    navigate("/fornecedores");
  }

  return (
    <Layout>
      <form className="flex flex-wrap -mx-3" onSubmit={formik.handleSubmit}>
        <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <FormTitle goBack="/fornecedores" />

            <div className="flex-auto p-6">
              <div className="flex items-center flex-wrap gap-2 mb-6">
                <Checkbox id="physicalPerson" name="personType" value={1} label="Pessoa Física" checked={formik.values.personType === 1} onChange={() => formik.setFieldValue("personType", 1)} />
                <Checkbox id="legalPerson" name="personType" value={2} label="Pessoa Jurídica" checked={formik.values.personType === 2} onChange={() => formik.setFieldValue("personType", 2)} />
              </div>

              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</p>
              <div className="flex flex-wrap py-3">
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="email" label="Email" icon="fas fa-envelope" title="Email" name="email" placeholder="Informe o email" errors={formik.touched.email && formik.errors.email} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="name" label={formik.values.personType === 1 ? "Nome" : "Nome fantasia"} icon="fas fa-user" title={formik.values.personType === 1 ? "Nome" : "Nome fantasia"} name="name" placeholder={`Informe o ${formik.values.personType === 1 ? "nome" : "nome fantasia"}`} errors={formik.touched.name && formik.errors.name} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="lastName" label={formik.values.personType === 1 ? "Sobrenome" : "Razão social"} icon="fas fa-user" title={formik.values.personType === 1 ? "Sobrenome" : "Razão social"} name="lastName" placeholder={`Informe o ${formik.values.personType === 1 ? "sobrenome" : "razão social"}`} errors={formik.touched.lastName && formik.errors.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="phone" label="Telefone" icon="fas fa-phone" title="Telefone" name="phone" placeholder="Informe o telefone" errors={formik.touched.phone && formik.errors.phone} onChange={(e) => formik.setFieldValue("phone", phoneMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.phone} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="mobile" label="Celular" icon="fas fa-mobile-alt" title="Celular" name="mobile" placeholder="Informe o celular" errors={formik.touched.mobile && formik.errors.mobile} maxLength={15} onChange={(e) => formik.setFieldValue("mobile", mobileMask(e.target.value))} onBlur={formik.handleBlur} value={formik.values.mobile} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="cpfCnpj" label={formik.values.personType === 1 ? "CPF" : "CNPJ"} icon="fas fa-file" title={formik.values.personType === 1 ? "CPF" : "CNPJ"} name="cpfCnpj" placeholder={`Informe o ${formik.values.personType === 1 ? "CPF" : "CNPJ"}`} errors={formik.touched.cpfCnpj && formik.errors.cpfCnpj} onChange={(e) => {formik.values.personType === 1 ? formik.setFieldValue("cpfCnpj", cpfMask(e.target.value)) : formik.setFieldValue("cpfCnpj", cnpjMask(e.target.value)) }} onBlur={formik.handleBlur} value={formik.values.cpfCnpj} />
                </div>
                <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                  <TextField id="rgIe" label={formik.values.personType === 1 ? "RG" : "IE"} icon="fas fa-file-invoice" title={formik.values.personType === 1 ? "RG" : "IE"} name="rgIe" placeholder={`Informe o ${formik.values.personType === 1 ? "RG" : "IE"}`} errors={formik.touched.rgIe && formik.errors.rgIe} onChange={(e) => {formik.values.personType === 1 ? formik.setFieldValue("rgIe", rgMask(e.target.value)) : formik.setFieldValue("rgIe", ieMask(e.target.value)) }} onBlur={formik.handleBlur} value={formik.values.rgIe} />
                </div>
                {
                  formik.values.personType === 1 && (
                    <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0 mb-3">
                      <DateField id="birthday" label="Nascimento" icon="fas fa-calendar-alt" title="Nascimento" name="birthday" errors={formik.touched.birthday && formik.errors.birthday} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthday} />
                    </div>
                  )
                }
              </div>
              <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              
              <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm"><i className="fa fa-image"></i>&nbsp;Foto do fornecedor</p>
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
